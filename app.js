'use strict';
const scenes = window.DEMO_SCENES || [];
const project = window.PROJECT_INFO || {};
const teaserScenes = scenes.filter(s=>s.teaser).sort((a,b)=>a.teaser.order-b.teaser.order);
const recordedScenes = scenes.filter(s=>s.recorded).sort((a,b)=>a.recorded.order-b.recorded.order);
const moreScenes = scenes.filter(s=>!s.teaser && !s.recorded);
const recordedPreviewCount = 4;
const $ = id => document.getElementById(id);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const seconds = value => `${Number(value).toFixed(2)} s`;
const time = value => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
const languageName = value => value === 'en' ? 'English' : 'Mandarin';
const channelNames = {intent:'Spoken request',visual:'Visual context',audio:'Audio context',dialogue_history:'Dialogue history',user_activity:'User activity',user_emotion:'User emotion',scene_condition:'Scene conditions',user_identity:'Speaker identity'};
const axisNames = {axis1:'Modality Dependency',axis2:'Contextual Disambiguation',axis3:'Intent Expression Form',axis4:'Acoustic Environment',axis5:'Demand Type',axis6:'Scenario Domain'};
const browseAxes = ['axis1','axis2','axis3','axis4'];
const topicNames = {all:'All examples',...Object.fromEntries(browseAxes.map(axis=>[axis,axisNames[axis]])),negative:'No demand'};
const reasonNames = {target_mismatch:'Wrong addressee',source_mismatch:'Wrong source',demand_incomplete:'Incomplete or withdrawn demand',intent_not_real:'Non-real intent',function_not_directed:'Function mention without a request'};
const reasonCodes = {target_mismatch:'R1',source_mismatch:'R2',demand_incomplete:'R3',intent_not_real:'R4',function_not_directed:'R5'};
const reasonLabel = reason => [reasonCodes[reason],reasonNames[reason] || reason].filter(Boolean).join(' · ');
let activeTopic = 'all';
let moreOpen = false;
let recordedExpanded = false;
let recordedTopic = 'all';
let teaserIndex = 0;
let teaserClip = 0;
let activeScene = null;
let activeClip = 0;
let activeSpan = 0;
let activeTab = 'story';
let annotationLanguage = 'en';
let galleryScroll = 0;
let stopAt = null;
let teaserStopAt = null;
let teaserPlaybackToken = 0;
let jsonObjectURL = null;

const segments = (scene, lang='en') => scene.annotations[lang].evaluation_targets.segments || [];
const sceneTranscript = (scene, lang='en') => scene.scene_transcripts?.[lang] || '';
const taxonomyFor = (scene, axis) => scene.taxonomy_axes.find(a => a.axis === axis);
const browsingAxis = () => browseAxes.includes(activeTopic);
const browsingRecordedAxis = () => browseAxes.includes(recordedTopic);
const taxonomyOptions = axis => [...new Map(moreScenes.filter(s=>s.label==='positive').map(s=>{
  const value=taxonomyFor(s,axis);return [value.code,value];
})).values()].sort((a,b)=>a.code.localeCompare(b.code,undefined,{numeric:true}));
const tag = (type, label) => `<span class="tag ${esc(type)}">${esc(label || channelNames[type] || type)}</span>`;
const wave = peaks => `<svg class="waveform" viewBox="0 0 400 100" aria-hidden="true">${peaks.map((v,i)=>`<rect x="${i*5}" y="${50-Math.max(2,v*39)}" width="2.5" height="${Math.max(4,v*78)}" rx="1.2" fill="currentColor"/>`).join('')}</svg>`;
function currentList({ignoreSubtype=false} = {}) {
  const lang = $('media-language').value;
  const modality = $('modality').value;
  const subtype = $('taxonomy-subtype').value;
  const query = $('search').value.trim().toLowerCase();
  const list = moreScenes.filter(s => {
    if (lang !== 'all' && s.language !== lang) return false;
    if (modality !== 'all' && s.modality !== modality) return false;
    if (activeTopic === 'negative' && s.label !== 'negative') return false;
    if (browsingAxis()) {
      if (s.label !== 'positive') return false;
      if (!ignoreSubtype && subtype !== 'all' && taxonomyFor(s,activeTopic).code !== subtype) return false;
    }
    const searchable = [s.title,s.summary,s.guide,s.scene_id,
      s.negative_explanation,reasonLabel(s.negative_reason),sceneTranscript(s),
      ...segments(s).map(x=>x.transcript),...s.axes.map(x=>x.name),
      ...s.taxonomy_axes.map(x=>`${axisNames[x.axis]} ${x.name}`)].join(' ').toLowerCase();
    return !query || searchable.includes(query);
  });
  if (browsingAxis()) list.sort((a,b)=>taxonomyFor(a,activeTopic).code.localeCompare(taxonomyFor(b,activeTopic).code,undefined,{numeric:true}));
  return list;
}
function cardTaxonomy(scene, axis=null) {
  if (scene.label==='negative') return tag('negative','No demand');
  const axes=[taxonomyFor(scene,axis || scene.recorded?.axis || 'axis1')];
  return `<dl class="card-taxonomy">${axes.map(a=>`<div class="taxonomy-value ${a.axis}"><dt>${esc(axisNames[a.axis])}</dt><dd>${esc(a.name)}</dd></div>`).join('')}</dl>`;
}
function renderSceneCard(s, {axis=null} = {}) {
  const picture=s.poster?`<img src="${esc(s.poster)}" alt="Preview frame from ${esc(s.title)}" loading="lazy">`:`<div class="audio-art">${wave(s.waveform)}</div>`;
  const duration=s.clips.reduce((total,clip)=>total+clip.duration,0);
  return `<a class="scene-card" href="#scene=${encodeURIComponent(s.scene_id)}" data-scene="${esc(s.scene_id)}"><div class="example-thumbnail">${picture}</div><div class="example-copy"><h3>${esc(s.title)}</h3><p class="example-summary">${esc(s.summary)}</p><p class="example-meta">${languageName(s.language)} · ${s.modality==='audio-only'?'Audio only · ':''}${s.clips.length} ${s.clips.length===1?'turn':'turns'} · ${time(duration)}${segments(s).length>1?` · ${segments(s).length} spans`:''}</p></div><div class="example-taxonomy">${cardTaxonomy(s,axis)}</div><span class="example-arrow" aria-hidden="true">→</span></a>`;
}
function renderProject() {
  if(project.title)document.title=project.title;
  if(project.name)$('publication-title').textContent=project.name;
  if(project.subtitle)$('publication-subtitle').textContent=project.subtitle;
  $('abstract-copy').innerHTML=project.abstract_html || '';
  if(project.scene_count)$('benchmark-scene-count').textContent=project.scene_count.toLocaleString('en-US');
  if(project.recorded_count)$('benchmark-recorded-count').textContent=project.recorded_count.toLocaleString('en-US');
  $('ethics-copy').innerHTML=(project.ethics || []).map(paragraph=>`<p>${esc(paragraph)}</p>`).join('');
  const options=Object.entries(topicNames).map(([id,name])=>`<option value="${id}">${esc(name)}</option>`).join('');
  $('category').innerHTML=options;
  $('recorded-category').innerHTML=options;
}
function renderTeaser() {
  $('teaser-media')?.pause();
  teaserStopAt=null;
  teaserPlaybackToken++;
  const s=teaserScenes[teaserIndex], sg=segments(s)[0];
  teaserClip=Math.min(teaserClip,s.clips.length-1);
  const clip=s.clips[teaserClip], isFinal=teaserClip===s.clips.length-1;
  const category=s.teaser.axis || 'negative';
  $('teaser-count').textContent=`${teaserScenes.length} cases`;
  $('teaser-categories').innerHTML=[...browseAxes,'negative'].map(axis=>`<button data-teaser-category="${axis}" aria-pressed="${axis===category}">${esc(topicNames[axis])}</button>`).join('');
  const transcript=sg?.transcript || sceneTranscript(s);
  const request=transcript?`<blockquote>${esc(transcript)}</blockquote>`:'<p class="inline-note">No transcript is provided.</p>';
  const context=sg?.required_context || [];
  const reference=sg?`<span class="inline-label">Reference intent</span><p class="teaser-intent">${esc(sg.structured_intent)}</p>${context.length?`<details class="inline-context"><summary>Required context · ${context.length} ${context.length===1?'source':'sources'}</summary><ul>${context.map(c=>`<li><strong>${esc(channelNames[c.type] || c.type)}.</strong> ${esc(c.description)}</li>`).join('')}</ul></details>`:''}`:`<span class="inline-label">Reference label</span>${tag('negative','No demand')}<p class="inline-note">${esc(s.negative_explanation || s.guide)}</p>`;
  const timing=sg?`<div class="teaser-timing"><span class="inline-label">Time span</span><button class="span-play-button" data-teaser-span="0" aria-label="Play demand span from ${seconds(sg.start_ms/1000)} to ${seconds(sg.end_ms/1000)} in final turn ${s.clips.length}"><span aria-hidden="true">▶</span> Play ${seconds(sg.start_ms/1000)}–${seconds(sg.end_ms/1000)}</button></div>`:'';
  const profileValue=value=>value===true?'Yes':value===false?'No':value===undefined||value===null||value===''?'Not provided':String(value).replaceAll('_',' ').replace(/^\w/,c=>c.toUpperCase());
  const profile=sg?`<div class="teaser-profile"><span class="inline-label">User profile</span><dl class="profile-fields">${[['user_in_frame','In frame'],['user_gender','Gender'],['user_age_group','Age group']].map(([field,label])=>`<div data-profile-field="${field}"><dt>${label}</dt><dd>${esc(profileValue(sg[field]))}</dd></div>`).join('')}</dl></div>`:'';
  const turns=s.clips.length>1?`<div class="teaser-turn-sequence" role="group" aria-label="Conversation turns">${s.clips.map((turn,index)=>`<button data-teaser-clip="${index}" aria-pressed="${index===teaserClip}"><strong>Turn ${index+1}</strong><span>${index===s.clips.length-1?'Final · evaluated':'Context'}</span></button>`).join('')}</div>`:'';
  const replies=clip.replies.length?`<div class="teaser-replies"><span class="inline-label">Assistant after turn ${teaserClip+1} · text context</span>${clip.replies.map(text=>`<p lang="${esc(s.language)}">${esc(text)}</p>`).join('')}</div>`:'';
  const nextTurn=!isFinal?`<button class="next-turn" data-teaser-clip="${teaserClip+1}">Continue to turn ${teaserClip+2} →</button>`:'';
  const scope=s.clips.length>1?`<div class="reference-scope"><span>Reference annotation for the final turn (${s.clips.length})</span>${!isFinal?`<button data-teaser-clip="${s.clips.length-1}">Go to evaluated turn →</button>`:''}</div>`:'';
  $('teaser-example').innerHTML=`<div class="teaser-layout"><div class="teaser-media"><video id="teaser-media" src="${esc(clip.src)}" poster="${esc(clip.poster || s.poster)}" controls playsinline preload="metadata" aria-label="${esc(s.title)}, user turn ${teaserClip+1}"></video><p class="teaser-media-caption">${languageName(s.language)} · Viewing turn ${teaserClip+1} of ${s.clips.length} · ${isFinal?'Final / evaluated':'Earlier context'} · ${time(clip.duration)}</p>${turns}${replies}${nextTurn}</div><div class="teaser-reference">${scope}${timing}<span class="inline-label">${sg?'Spoken request':'Speech in the scene'}</span>${request}${reference}${profile}<a class="open-detail" href="#scene=${encodeURIComponent(s.scene_id)}" data-scene="${esc(s.scene_id)}">View full interaction and annotation →</a></div></div>`;
  $('teaser-media').addEventListener('error',()=>{$('status').textContent='The example video could not be loaded.';});
  $('teaser-media').addEventListener('timeupdate',()=>{
    const player=$('teaser-media');
    if(player && teaserStopAt!==null && player.currentTime>=teaserStopAt){const end=teaserStopAt;teaserStopAt=null;player.pause();player.currentTime=end;}
  });
  $('teaser-position').textContent=`${teaserIndex+1} / ${teaserScenes.length}`;
  $('teaser-previous').disabled=teaserIndex===0;
  $('teaser-next').disabled=teaserIndex===teaserScenes.length-1;
  $('header-more-count').textContent=`(${moreScenes.length})`;
  $('more-total').textContent=`${moreScenes.length} additional examples`;
}
function playTeaserSpan(index) {
  const scene=teaserScenes[teaserIndex], span=segments(scene)[index];
  if(!span)return;
  if(teaserClip!==scene.clips.length-1){teaserClip=scene.clips.length-1;renderTeaser();}
  const player=$('teaser-media'), token=++teaserPlaybackToken;
  const start=()=>{
    if(token!==teaserPlaybackToken || player!==$('teaser-media'))return;
    player.currentTime=span.start_ms/1000;
    teaserStopAt=span.end_ms/1000;
    if(player.requestVideoFrameCallback){
      const stopOnFrame=()=>{
        if(token!==teaserPlaybackToken || teaserStopAt===null)return;
        if(player.currentTime>=teaserStopAt){const end=teaserStopAt;teaserStopAt=null;player.pause();player.currentTime=end;}
        else player.requestVideoFrameCallback(stopOnFrame);
      };
      player.requestVideoFrameCallback(stopOnFrame);
    }
  };
  if(player.readyState>=1)start();else player.addEventListener('loadedmetadata',start,{once:true});
  // Start within the click gesture, including when a new turn needs metadata.
  player.play().catch(()=>{if(token===teaserPlaybackToken)$('status').textContent='Use the video play button to start playback.';});
}
function groupedCards(list, axis=null) {
  let previousGroup=null;
  return list.map(scene=>{
    let heading='';
    if (axis) {
      const value=taxonomyFor(scene,axis);
      if (value.code!==previousGroup) {
        const count=list.filter(item=>taxonomyFor(item,axis).code===value.code).length;
        heading=`<div class="taxonomy-group"><h3>${esc(value.name)}</h3><span>${count} ${count===1?'example':'examples'}</span></div>`;
        previousGroup=value.code;
      }
    }
    return heading+renderSceneCard(scene,{axis});
  }).join('');
}
function currentRecordedList({ignoreSubtype=false} = {}) {
  const subtype=$('recorded-subtype').value;
  const query=$('recorded-search').value.trim().toLowerCase();
  const list=recordedScenes.filter(scene=>{
    if(recordedTopic==='negative' && scene.label!=='negative')return false;
    if(browsingRecordedAxis()){
      if(scene.label!=='positive')return false;
      if(!ignoreSubtype && subtype!=='all' && taxonomyFor(scene,recordedTopic).code!==subtype)return false;
    }
    const text=[scene.title,scene.summary,scene.scene_id,scene.recorded.original_scene_id,
      ...segments(scene).map(s=>s.transcript),...scene.taxonomy_axes.map(a=>a.name)].join(' ').toLowerCase();
    return !query || text.includes(query);
  });
  if(browsingRecordedAxis())list.sort((a,b)=>taxonomyFor(a,recordedTopic).code.localeCompare(taxonomyFor(b,recordedTopic).code,undefined,{numeric:true}));
  return list;
}
function renderRecorded() {
  $('header-recorded-count').textContent=`(${recordedScenes.length})`;
  $('recorded-total').textContent=`${recordedScenes.length} recordings`;
  const languages=[...new Set(recordedScenes.map(s=>languageName(s.language)))].join(' / ');
  $('recorded-language').textContent=`${languages} speech · English reference annotations`;
  $('recorded-controls').hidden=!recordedExpanded;
  $('toggle-recorded').setAttribute('aria-expanded',String(recordedExpanded));
  $('toggle-recorded').textContent=recordedExpanded?'Show fewer recordings':`Show all ${recordedScenes.length} recordings`;
  $('recorded-result-count').hidden=!recordedExpanded;
  if(!recordedExpanded){
    const featured=recordedScenes.slice(0,recordedPreviewCount);
    $('recorded-grid').innerHTML=featured.map(s=>renderSceneCard(s,{axis:s.recorded.axis})).join('');
    $('recorded-result-count').textContent=`${featured.length} featured · ${recordedScenes.length} available`;
    $('recorded-empty').hidden=true;
    return;
  }
  const list=currentRecordedList();
  $('recorded-result-count').textContent=`${list.length} of ${recordedScenes.length} recordings shown`;
  $('recorded-taxonomy-filter').hidden=!browsingRecordedAxis();
  if(browsingRecordedAxis()){
    const selected=$('recorded-subtype').value;
    const pool=currentRecordedList({ignoreSubtype:true});
    const options=[...new Map(recordedScenes.filter(s=>s.label==='positive').map(s=>{const a=taxonomyFor(s,recordedTopic);return [a.code,a];})).values()].sort((a,b)=>a.code.localeCompare(b.code,undefined,{numeric:true}));
    $('recorded-subtype').innerHTML=`<option value="all">All subtypes · ${pool.length}</option>`+options.map(a=>`<option value="${esc(a.code)}">${esc(a.name)} · ${pool.filter(s=>taxonomyFor(s,recordedTopic).code===a.code).length}</option>`).join('');
    $('recorded-subtype').value=selected;
  }
  $('recorded-grid').innerHTML=groupedCards(list,browsingRecordedAxis()?recordedTopic:null);
  $('recorded-empty').hidden=list.length!==0;
}
function setRecordedExpanded(expanded) {recordedExpanded=expanded;renderRecorded();}
function resetRecorded() {recordedTopic='all';$('recorded-category').value='all';$('recorded-subtype').value='all';$('recorded-search').value='';renderRecorded();}
function setMoreOpen(open) {
  moreOpen=open;
  $('more-content').hidden=!open;
  $('toggle-more').setAttribute('aria-expanded',String(open));
  $('toggle-more').textContent=open?'Hide additional demos':`Browse ${moreScenes.length} more demos`;
  renderGallery();
}
function renderGallery() {
  if (!moreOpen) {$('scene-grid').innerHTML='';return;}
  const list = currentList();
  $('taxonomy-filter').hidden = !browsingAxis();
  if (browsingAxis()) {
    const selected=$('taxonomy-subtype').value;
    const pool=currentList({ignoreSubtype:true});
    $('taxonomy-subtype').innerHTML=`<option value="all">All subtypes · ${pool.length}</option>`+taxonomyOptions(activeTopic).map(a=>{
      const count=pool.filter(s=>taxonomyFor(s,activeTopic).code===a.code).length;
      return `<option value="${esc(a.code)}">${esc(a.name)} · ${count}</option>`;
    }).join('');
    $('taxonomy-subtype').value=selected;
  }
  $('result-count').textContent = `${list.length} examples · ${$('media-language').value==='all'?'All languages':languageName($('media-language').value)+' media'}`;
  $('scene-grid').innerHTML = groupedCards(list,browsingAxis()?activeTopic:null);
  $('empty-state').hidden = list.length !== 0;
}
function resetFilters() {
  activeTopic='all';$('category').value='all';$('media-language').value='en';$('modality').value='all';$('taxonomy-subtype').value='all';$('search').value='';renderGallery();
}
function navList() {
  if (activeScene?.teaser) return teaserScenes;
  if (activeScene?.recorded) {
    const filtered=recordedExpanded?currentRecordedList():recordedScenes;
    return filtered.includes(activeScene)?filtered:recordedScenes;
  }
  const filtered=currentList();
  return filtered.some(s=>s.scene_id===activeScene?.scene_id)?filtered:moreScenes;
}
function renderDetail() {
  const s=activeScene;
  $('scene-title').textContent=s.title;
  $('scene-summary').textContent=s.summary;
  const detailAxis=s.teaser?s.teaser.axis:s.recorded?(recordedExpanded && browsingRecordedAxis()?recordedTopic:s.recorded.axis):(browsingAxis()?activeTopic:null);
  const collectionName=s.teaser?'Paper teaser':s.recorded?'Human recordings':'More demos';
  $('detail-category').textContent=s.label==='negative'?'No demand':detailAxis?`${axisNames[detailAxis]} · ${taxonomyFor(s,detailAxis).name}`:'Positive example';
  $('back-to-gallery').textContent=`← ${collectionName}`;
  $('detail-badges').innerHTML=tag('',`${languageName(s.language)} speech`)+tag('',s.modality==='audio-only'?'Audio only':'Video + audio')+tag('',`${s.clips.length} user ${s.clips.length===1?'turn':'turns'}`)+tag('',s.source==='human-recorded'?'Human-recorded scene':'Generated scene');
  const list=navList();const index=list.indexOf(s);
  $('scene-position').textContent=`${collectionName} · ${index+1} of ${list.length}`;
  $('previous-scene').disabled=index<=0;
  $('next-scene').disabled=index>=list.length-1;
  $('taxonomy-fields').innerHTML=s.axes.map(a=>`<dt>${axisNames[a.axis]}</dt><dd>${a.code?`<code>${esc(a.code)}</code>`:''}${esc(a.name)}</dd>`).join('');
  renderMedia(); renderAnnotation();
}
function pauseMedia() {document.querySelectorAll('video,audio').forEach(m=>m.pause());stopAt=null;teaserStopAt=null;teaserPlaybackToken++;}
function renderMedia() {
  pauseMedia();
  const s=activeScene, clip=s.clips[activeClip], isFinal=activeClip===s.clips.length-1;
  $('media-caption').textContent=`Viewing turn ${activeClip+1} · ${isFinal?'Final / evaluated':'Earlier context'}`;
  if (s.modality==='audio-visual') {
    $('media-stage').innerHTML=`<video id="active-media" src="${esc(clip.src)}" ${clip.poster?`poster="${esc(clip.poster)}"`:''} controls playsinline preload="metadata" aria-label="${esc(s.title)}, user turn ${activeClip+1}"></video>`;
  } else {
    $('media-stage').innerHTML=`<div class="audio-stage"><span class="audio-stage-title">Listen to user turn ${activeClip+1}</span>${isFinal?wave(s.waveform):'<span>Earlier conversation context</span>'}<small>${isFinal?'Waveform of the final user turn':'Original audio'} · ${languageName(s.language)} speech</small><audio id="active-media" src="${esc(clip.src)}" controls preload="metadata" aria-label="${esc(s.title)}, user turn ${activeClip+1}"></audio></div>`;
  }
  $('active-media').addEventListener('error',()=>{$('status').textContent='The media could not be loaded. Check the local preview media folder.';});
  $('active-media').addEventListener('timeupdate',()=>{const m=$('active-media');if(stopAt!==null && m.currentTime>=stopAt){m.pause();stopAt=null;}});
  const segs=segments(s);
  $('demand-timeline').innerHTML=isFinal && segs.length?`<div class="timeline-top"><span>Demand spans in the final turn</span><button class="play-request" data-replay="true">▶ Play selected span</button></div><div class="timeline-track" aria-label="Demand locations within the final clip">${segs.map((sg,i)=>`<button class="timeline-span ${i===activeSpan?'active':''}" data-span="${i}" style="left:${Math.min(100,Math.max(0,sg.start_ms/10/clip.duration))}%;width:${Math.min(100,(sg.end_ms-sg.start_ms)/10/clip.duration)}%" aria-label="Demand span ${i+1}: ${seconds(sg.start_ms/1000)} to ${seconds(sg.end_ms/1000)}" title="Span ${i+1}: ${seconds(sg.start_ms/1000)}–${seconds(sg.end_ms/1000)}"></button>`).join('')}</div><div class="timeline-top" style="margin:7px 0 0"><span>0:00</span><span>${time(clip.duration)}</span></div>`:`<div class="timeline-top" style="margin:0"><span>${isFinal?'No demand spans are annotated in this scene.':'Earlier context. Reference annotations apply to the final turn.'}</span></div>`;
  $('start-context').hidden=s.clips.length===1;
  $('turn-sequence').innerHTML=s.clips.map((c,i)=>`${i?'<span class="sequence-arrow" aria-hidden="true">→</span>':''}<button class="turn-button ${i===activeClip?'active':''} ${i===s.clips.length-1?'final':''}" data-clip="${i}" aria-pressed="${i===activeClip}"><strong>User ${i+1}</strong>${i===s.clips.length-1?'Final · evaluated':`Context · ${time(c.duration)}`}</button>${c.replies.length?`<span class="sequence-arrow" aria-hidden="true">→</span><button class="turn-button" data-reply="${i}" aria-label="Read assistant text after turn ${i+1}"><strong>Assistant</strong>Text context</button>`:''}`).join('');
  const previous=s.clips.slice(0,activeClip).flatMap((c,i)=>c.replies.map(text=>({text,turn:i+1})));
  const following=clip.replies.map(text=>({text,turn:activeClip+1}));
  const showReplies=isFinal?previous:following;
  $('reply-panel').innerHTML=showReplies.map((r,i)=>`<details ${i===showReplies.length-1?'open':''}><summary>Assistant text after user turn ${r.turn}</summary><p>${esc(r.text)}</p></details>`).join('');
}
function renderAnnotation() {
  const s=activeScene, segs=segments(s,annotationLanguage), sg=segs[activeSpan], positive=s.label!=='negative';
  $('annotation-scope').textContent=`Final turn ${s.clips.length} · ${annotationLanguage==='en'?'English':'中文'}`;
  document.querySelectorAll('[data-tab]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.tab===activeTab));b.tabIndex=b.dataset.tab===activeTab?0:-1;});
  $('annotation-content').setAttribute('aria-labelledby',`tab-${activeTab}`);
  $('annotation-content').lang=annotationLanguage;
  $('span-selector').innerHTML=segs.length>1?segs.map((sg,i)=>`<button data-span="${i}" aria-pressed="${i===activeSpan}">Span ${i+1} · ${seconds(sg.start_ms/1000)}–${seconds(sg.end_ms/1000)}</button>`).join(''):'';
  const decision=`<div class="demand-decision ${positive?'':'no'}"><span>Is a valid demand present?</span><strong>${positive?'Yes · Demand present':'No · Do not trigger'}</strong></div>`;
  let content='';
  if (activeTab==='story' && positive) {
    content=decision+`<div class="annotation-block"><div class="field-caption"><span>What the user says</span><button class="play-request" data-replay="true">▶ ${seconds(sg.start_ms/1000)}–${seconds(sg.end_ms/1000)}</button></div><blockquote class="request-quote" lang="${esc(s.language)}">“${esc(sg.transcript)}”</blockquote>${s.language!=='en'?'<span class="quote-language">Original Mandarin transcript · English translation is not supplied in this preview.</span>':''}</div><div class="annotation-block meaning"><div class="field-caption"><span>What the user wants</span><code>structured_intent</code></div><p>${esc(sg.structured_intent)}</p></div><div class="annotation-block"><div class="field-caption"><span>Context needed to understand it</span><code>required_context</code></div><div class="context-list">${(sg.required_context||[]).map(c=>`<div class="context-card">${tag(c.type)}<p>${esc(c.description)}</p>${c.necessity?`<details><summary>Why this context matters</summary><p>${esc(c.necessity)}</p></details>`:''}</div>`).join('')||'<p class="tab-note">No additional context is annotated for this span.</p>'}</div></div><aside class="guide-note"><strong>Reading guide · editorial summary</strong>${esc(s.guide)}</aside>`;
  } else if (activeTab==='story') {
    const transcript=sceneTranscript(s,annotationLanguage);
    const speech=transcript.trim() && transcript.trim()!=='/'?`<blockquote class="request-quote" lang="${esc(s.language)}">“${esc(transcript)}”</blockquote>`:'<p class="tab-note">No transcript is provided for this recording. Watch the video for the spoken interaction.</p>';
    content=decision+`<div class="annotation-block"><div class="field-caption">What is said in the scene</div>${speech}</div><div class="annotation-block meaning"><div class="field-caption">Why the assistant should not trigger · editorial explanation</div><p>${esc(s.negative_explanation||s.guide)}</p></div>${s.negative_reason?tag('negative',reasonLabel(s.negative_reason)):''}<p class="tab-note" style="margin-top:16px">The annotation contains <code>has_demand: false</code> and an empty segment list. There is no intended assistant action to recover in this example.</p><aside class="guide-note"><strong>Reading guide · editorial summary</strong>${esc(s.guide)}</aside>`;
  } else if (activeTab==='keypoints') {
    content=positive?`<p class="tab-note">Atomic reference points for span ${activeSpan+1}. The evidence label shows what each point depends on.</p><ol class="keypoint-list">${(sg.key_points||[]).map((k,i)=>`<li>${tag(k.source.replace('required_context.',''))}<p>${i+1}. ${esc(k.point)}</p><small>${esc(k.qid)} · Tiers: ${esc((k.tiers||[]).join(' + '))}</small></li>`).join('')}</ol>`:`${decision}<p class="tab-note">No demand-understanding key points are assigned to no-demand scenes.</p>`;
  } else {
    const fields=positive?Object.entries(sg).filter(([k])=>!['key_points','required_context'].includes(k)):[];
    content=`<p class="tab-note">${positive?`Fields for span ${activeSpan+1}. The JSON below contains every annotated span, including context and key points.`:'This scene has no annotated demand segments.'} Original-language auxiliary text is preserved where no English version is supplied.</p><dl class="fields-list"><dt>scene_id</dt><dd>${esc(s.scene_id)}</dd>${s.recorded?`<dt>original_scene_id</dt><dd>${esc(s.recorded.original_scene_id)}</dd>`:''}<dt>has_demand</dt><dd>${positive?'true':'false'}</dd>${fields.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(typeof v==='object'?JSON.stringify(v):v)}</dd>`).join('')}</dl><details class="raw-details"><summary>View all reference fields as JSON</summary><pre>${esc(JSON.stringify(s.annotations[annotationLanguage],null,2))}</pre></details><a id="download-json" class="download-json" download="${esc(s.scene_id)}_${annotationLanguage}_reference.json">Download reference JSON ↓</a>`;
  }
  $('annotation-content').innerHTML=content;
  if (jsonObjectURL){URL.revokeObjectURL(jsonObjectURL);jsonObjectURL=null;}
  if ($('download-json')) {jsonObjectURL=URL.createObjectURL(new Blob([JSON.stringify(s.annotations[annotationLanguage],null,2)],{type:'application/json'}));$('download-json').href=jsonObjectURL;}
}
function chooseSpan(index) {
  activeSpan=index;
  if(activeClip!==activeScene.clips.length-1)activeClip=activeScene.clips.length-1;
  renderMedia();renderAnnotation();
}
function replaySpan() {
  const sg=segments(activeScene)[activeSpan];if(!sg)return;
  if(activeClip!==activeScene.clips.length-1){activeClip=activeScene.clips.length-1;renderMedia();}
  const player=$('active-media');
  const play=()=>{player.currentTime=sg.start_ms/1000;stopAt=sg.end_ms/1000;player.play().catch(()=>{$('status').textContent='Use the media play button to start playback.';});};
  if(player.readyState>=1)play();else player.addEventListener('loadedmetadata',play,{once:true});
}
function route() {
  const id=new URLSearchParams(location.hash.slice(1)).get('scene');
  const next=scenes.find(s=>s.scene_id===id);
  if (!next) {
    const prior=activeScene;
    if(prior?.teaser)teaserClip=activeClip;
    pauseMedia();activeScene=null;
    $('media-stage').innerHTML='';$('gallery-view').hidden=false;$('detail-view').hidden=true;
    if(!$('teaser-media'))renderTeaser();
    if(location.hash==='#more-demos')setMoreOpen(true);
    if(location.hash==='#recorded-demos')setRecordedExpanded(true);
    renderRecorded();
    renderGallery();window.scrollTo({top:galleryScroll,behavior:'instant'});
    if(prior){
      if(!prior.teaser && galleryScroll===0)$(prior.recorded?'recorded-demos':'more-demos').scrollIntoView();
      const card=document.querySelector(`[data-scene="${prior.scene_id}"]`);card?.focus({preventScroll:true});
    }
    if(location.hash==='#more-demos'){$('more-demos').scrollIntoView();$('more-heading').focus({preventScroll:true});}
    if(location.hash==='#recorded-demos'){$('recorded-demos').scrollIntoView();$('recorded-heading').focus({preventScroll:true});}
    if(location.hash==='#teaser-demos')$('teaser-demos').scrollIntoView();
    if(['#abstract','#introduction','#reading-guide'].includes(location.hash))$('abstract').scrollIntoView();
    if(location.hash==='#ethics-statement')$('ethics-statement').scrollIntoView();
    return;
  }
  if(!activeScene)galleryScroll=window.scrollY;
  const fromTeaser=Boolean(next.teaser && $('teaser-media') && teaserIndex===next.teaser.order);
  if(next.teaser){
    if(teaserIndex!==next.teaser.order)teaserClip=0;
    teaserIndex=next.teaser.order;
  }
  pauseMedia();$('teaser-example').innerHTML='';
  if(next.recorded && (recordedExpanded || next.recorded.order>=recordedPreviewCount)){
    if(!currentRecordedList().includes(next))resetRecorded();
    if(!recordedExpanded)setRecordedExpanded(true);
  }
  if(!next.teaser && !next.recorded && !moreOpen){
    if($('media-language').value!==next.language)$('media-language').value='all';
    setMoreOpen(true);
  }
  activeScene=next;activeClip=fromTeaser?teaserClip:0;activeSpan=0;activeTab='story';
  $('gallery-view').hidden=true;$('detail-view').hidden=false;renderDetail();
  window.scrollTo({top:0,behavior:'instant'});$('scene-title').focus({preventScroll:true});
}

for (const id of ['media-language','modality','taxonomy-subtype']) $(id).addEventListener('change',renderGallery);
$('category').addEventListener('change',()=>{activeTopic=$('category').value;$('taxonomy-subtype').value='all';renderGallery();});
$('recorded-category').addEventListener('change',()=>{recordedTopic=$('recorded-category').value;$('recorded-subtype').value='all';renderRecorded();});
$('search').addEventListener('input',renderGallery);
$('reset-filters').addEventListener('click',resetFilters);
$('empty-reset').addEventListener('click',resetFilters);
for(const [id,direction] of [['teaser-previous',-1],['teaser-next',1]])$(id).addEventListener('click',()=>{teaserIndex=Math.max(0,Math.min(teaserScenes.length-1,teaserIndex+direction));teaserClip=0;renderTeaser();});
$('toggle-more').addEventListener('click',()=>setMoreOpen(!moreOpen));
$('toggle-recorded').addEventListener('click',()=>setRecordedExpanded(!recordedExpanded));
$('reset-recorded').addEventListener('click',resetRecorded);
$('recorded-empty-reset').addEventListener('click',resetRecorded);
$('recorded-subtype').addEventListener('change',renderRecorded);
$('recorded-search').addEventListener('input',renderRecorded);
document.querySelectorAll('a[href="#recorded-demos"]').forEach(link=>link.addEventListener('click',()=>{
  setRecordedExpanded(true);
  if(location.hash==='#recorded-demos')$('recorded-demos').scrollIntoView();
}));
document.querySelectorAll('a[href="#more-demos"]').forEach(link=>link.addEventListener('click',()=>{
  setMoreOpen(true);
  if(location.hash==='#more-demos')$('more-demos').scrollIntoView();
}));
$('start-context').addEventListener('click',()=>{activeClip=0;renderMedia();});
$('jump-to-annotation').addEventListener('click',event=>{event.preventDefault();$('understanding-heading').scrollIntoView();$('understanding-heading').focus({preventScroll:true});});
$('annotation-language').addEventListener('change',()=>{annotationLanguage=$('annotation-language').value;renderAnnotation();});
for (const [id,direction] of [['previous-scene',-1],['next-scene',1]]) $(id).addEventListener('click',()=>{const list=navList(),i=list.indexOf(activeScene)+direction;if(list[i])location.hash=`scene=${list[i].scene_id}`;});
document.addEventListener('click',event=>{
  const b=event.target.closest('button');if(!b)return;
  if(b.dataset.teaserCategory){teaserIndex=teaserScenes.findIndex(s=>(s.teaser.axis || 'negative')===b.dataset.teaserCategory);teaserClip=0;renderTeaser();document.querySelector(`[data-teaser-category="${b.dataset.teaserCategory}"]`).focus({preventScroll:true});}
  if(b.dataset.teaserClip!==undefined){teaserClip=Number(b.dataset.teaserClip);renderTeaser();document.querySelector(`.teaser-turn-sequence [data-teaser-clip="${teaserClip}"]`)?.focus({preventScroll:true});}
  if(b.dataset.teaserSpan!==undefined)playTeaserSpan(Number(b.dataset.teaserSpan));
  if(b.dataset.tab){activeTab=b.dataset.tab;renderAnnotation();}
  if(b.dataset.span!==undefined)chooseSpan(Number(b.dataset.span));
  if(b.dataset.clip!==undefined){activeClip=Number(b.dataset.clip);renderMedia();}
  if(b.dataset.reply!==undefined){activeClip=Number(b.dataset.reply);renderMedia();const detail=$('reply-panel').querySelector('details');if(detail){detail.open=true;detail.querySelector('summary').focus();}}
  if(b.dataset.replay)replaySpan();
});
$('annotation-tabs').addEventListener('keydown',event=>{
  const tabs=[...document.querySelectorAll('[data-tab]')];let index=tabs.indexOf(document.activeElement);
  if(index<0||!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;
  event.preventDefault();index=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
  activeTab=tabs[index].dataset.tab;renderAnnotation();tabs[index].focus();
});
window.addEventListener('hashchange',route);
document.addEventListener('play',event=>{document.querySelectorAll('video,audio').forEach(media=>{if(media!==event.target)media.pause();});},true);
renderProject();renderTeaser();renderRecorded();setMoreOpen(false);route();
