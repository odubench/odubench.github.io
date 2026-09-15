window.DEMO_SCENES = [
  {
    "scene_id": "avp_gen_000003",
    "title": "What about this one?",
    "summary": "A pointing gesture meets an earlier conversation about a diagram.",
    "guide": "The request is only four words long. The pointing gesture locates the referent; the earlier conversation explains what the user is asking about.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.2",
        "name": "Direct Question"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      },
      {
        "axis": "axis5",
        "code": "5.4",
        "name": "Guidance and Explanation"
      },
      {
        "axis": "axis6",
        "code": "6.6",
        "name": "Learning and Education"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.2",
        "name": "Direct Question"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 2770,
              "end_ms": 3690,
              "transcript": "What about this one?",
              "structured_intent": "The user wants to understand the meaning of a certain element in the textbook diagram they are referring to.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "The textbook page has a block-and-line diagram resembling a circuit diagram, and the user's finger points to a certain area of this diagram; the \"this one\" the user mentions refers to the area pointed to by the finger.",
                  "necessity": "Without seeing the location the user is pointing to, it is impossible to determine which element in the diagram \"this one\" refers to."
                },
                {
                  "type": "dialogue_history",
                  "description": "Previously, the user asked about the steps of the negative feedback loop and the meaning of the dashed lines in the diagram, and the agent has already answered; the current question continues the previous discussion of the same diagram.",
                  "necessity": "Without knowing the previous context, it is impossible to understand that \"this one\" is the next element in the continued questioning about the same diagram."
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to understand the meaning of a certain element in the diagram.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user is referring to the area of the diagram pointed to by the finger.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The question continues the previous discussion of the same diagram.",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 2770,
              "end_ms": 3690,
              "transcript": "What about this one?",
              "structured_intent": "用户想了解其所指的教科书图表中某一元素的含义",
              "required_context": [
                {
                  "type": "visual",
                  "description": "教科书页面有形似电路图的方块线条图表，用户手指指向该图表某一区域；用户所说的this one即指手指指向的该区域",
                  "necessity": "若未看到用户指向位置，无法确定'this one'指代图表中的哪个元素"
                },
                {
                  "type": "dialogue_history",
                  "description": "前序用户询问了negative feedback loop步骤及图中虚线含义，agent已作答；当前提问延续前序对同一图表的探讨",
                  "necessity": "若不知前文，无法理解'this one'是同一图表中延续提问的下一个元素"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想了解图表中某元素的含义",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户所指的是手指指向的图表区域",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "提问延续前序对同一图表的探讨",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000003__clip_v1.mp4",
        "duration": 7.058,
        "replies": [
          "The cycle begins with the hypothalamus releasing TRH, which signals the pituitary to release TSH. TSH then stimulates the thyroid to produce T3 and T4. When T3/T4 levels are high, they inhibit further TRH and TSH release — that's the negative feedback shown by the dashed line."
        ],
        "poster": "media/avp_gen_000003__v1.jpg"
      },
      {
        "id": "v2",
        "src": "media/avp_gen_000003__clip_v2.mp4",
        "duration": 6.06,
        "replies": [
          "Exactly. That specific inhibitory pathway — the dashed line from T3/T4 to the pituitary and hypothalamus — is the central regulatory mechanism. Without it, hormone production would spiral out of control."
        ],
        "poster": "media/avp_gen_000003__v2.jpg"
      },
      {
        "id": "v3",
        "src": "media/avp_gen_000003__clip_v3.mp4",
        "duration": 4.086,
        "replies": [],
        "poster": "media/avp_gen_000003.jpg"
      }
    ],
    "poster": "media/avp_gen_000003.jpg",
    "negative_reason": "",
    "negative_signal": ""
  },
  {
    "scene_id": "avp_gen_000075",
    "title": "Is this section a dead end?",
    "summary": "A user changes a request while referring to a physical model.",
    "guide": "Follow the self-correction from rerouting a piece to asking whether the section is a dead end. Visual context identifies both the red piece and its surrounding area.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      },
      {
        "axis": "axis5",
        "code": "5.2",
        "name": "Visual Perception and Recognition"
      },
      {
        "axis": "axis6",
        "code": "6.7",
        "name": "Office and Collaboration"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 4780,
              "end_ms": 12830,
              "transcript": "maybe we just reroute this red piece right here, or no, wait, is this whole section just a dead end?",
              "structured_intent": "The user wants to know whether the recently mentioned red piece and the area it is in within the currently assembled plastic tile structure are a dead end.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "There is a model of red, blue, green, and yellow plastic tiles connected by snaps on the floor; the \"this red piece\" and \"this whole section\" the user mentions refer to the red piece and the area it is in within this plastic tile model on the floor.",
                  "necessity": "Without seeing the tile model, it is impossible to understand the referents of \"red piece\" and \"section\"."
                },
                {
                  "type": "user_emotion",
                  "description": "The user rubs his forehead, looking tired and frustrated, and deliberately lowers his voice to a whisper.",
                  "necessity": "Without perceiving the tiredness and whispering, the agent might fail to provide comfort or use the wrong volume."
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to confirm whether the red piece and its area are a dead end.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user is referring to the red piece of the plastic tiles on the floor.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user is referring to the tile area where the red piece is located.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 4780,
              "end_ms": 12830,
              "transcript": "maybe we just reroute this red piece right here, or no, wait, is this whole section just a dead end?",
              "structured_intent": "用户想知道当前拼搭的塑料积木结构中，刚提到的红色部件及其所在区域是否是死胡同",
              "required_context": [
                {
                  "type": "visual",
                  "description": "地上有通过卡扣连接的红蓝绿黄四色塑料积木模型；用户所说的this red piece和this whole section指的就是该地上的塑料积木模型中的红色部件及其所在区域",
                  "necessity": "若未看到积木模型，无法理解red piece和section的指代对象"
                },
                {
                  "type": "user_emotion",
                  "description": "用户揉额头，神态疲惫受挫，且刻意压低声音耳语",
                  "necessity": "若未感知到疲惫和耳语，agent可能无法提供安抚或用错音量"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想确认红色部件及区域是否死胡同",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户所指的是地上的塑料积木红色部件",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户所指的是红色部件所在的积木区域",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000075__clip_v1.mp4",
        "duration": 13.073,
        "replies": [],
        "poster": "media/avp_gen_000075.jpg"
      }
    ],
    "poster": "media/avp_gen_000075.jpg",
    "negative_reason": "",
    "negative_signal": ""
  },
  {
    "scene_id": "aop_gen_000050",
    "title": "What was that glitch sound?",
    "summary": "Background music gives meaning to a spoken reference.",
    "guide": "The user asks about a sound in the music and asks to save a lyric. The music supplies the referent of ‘that glitch thing’.",
    "language": "en",
    "modality": "audio-only",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Acoustic event dependence"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      },
      {
        "axis": "axis5",
        "code": "5.10",
        "name": "Content Creation"
      },
      {
        "axis": "axis6",
        "code": "6.12",
        "name": "Creative Work and Content Production"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.3",
        "name": "Audio-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 3080,
              "end_ms": 8640,
              "transcript": "That was sick! What was that glitch thing? Oh, and I just had a lyric silhouette in neon static. Can you save that?",
              "structured_intent": "The user wants to know what the glitch effect in the music just played is, and to save the lyric \"silhouette in neon static\" they just thought of.",
              "required_context": [
                {
                  "type": "audio",
                  "description": "The electronic dance music playing in the background with a glitch effect; the \"that glitch thing\" the user mentions refers to the glitch effect in this background dance track.",
                  "necessity": "Without hearing the music, it is impossible to determine what specific sound \"glitch thing\" refers to."
                }
              ],
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to know what the glitch effect is.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user wants to save the lyric they just thought of.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user is referring to the glitch effect in the background dance track.",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 3080,
              "end_ms": 8640,
              "transcript": "That was sick! What was that glitch thing? Oh, and I just had a lyric silhouette in neon static. Can you save that?",
              "structured_intent": "用户想知道刚才播放的音乐中的glitch音效是什么，并保存自己刚想到的歌词'silhouette in neon static'",
              "required_context": [
                {
                  "type": "audio",
                  "description": "背景播放的带有glitch音效的电子舞曲；用户所说的'that glitch thing'指代该背景舞曲中的glitch音效",
                  "necessity": "若没听到该音乐，就无法解析'glitch thing'具体指代哪种声音"
                }
              ],
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想知道glitch音效是什么",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户想保存刚想到的歌词",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户指代背景舞曲的glitch音效",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/aop_gen_000050__clip_v1.wav",
        "duration": 10.05424,
        "replies": []
      }
    ],
    "waveform": [
      0.473,
      0.454,
      0.385,
      0.423,
      0.416,
      0.407,
      0.385,
      0.309,
      0.289,
      0.319,
      0.338,
      0.425,
      0.246,
      0.233,
      0.302,
      0.339,
      0.328,
      0.352,
      0.247,
      0.346,
      0.291,
      0.404,
      0.311,
      0.435,
      0.16,
      0.264,
      0.299,
      0.172,
      0.264,
      0.189,
      0.039,
      0.041,
      0.038,
      0.041,
      0.28,
      0.308,
      0.271,
      0.213,
      0.212,
      0.28,
      0.132,
      0.097,
      0.026,
      0.02,
      0.257,
      0.16,
      0.017,
      0.188,
      0.126,
      0.193,
      0.188,
      0.117,
      0.173,
      0.026,
      0.213,
      0.189,
      0.243,
      0.141,
      0.156,
      0.172,
      0.12,
      0.222,
      0.155,
      0.156,
      0.236,
      0.227,
      0.238,
      0.201,
      0.05,
      0.048,
      0.079,
      0.088,
      0.309,
      0.931,
      0.91,
      0.921,
      0.764,
      1.0,
      0.82,
      0.605
    ],
    "negative_reason": "",
    "negative_signal": ""
  },
  {
    "scene_id": "avp_gen_000057",
    "title": "Drag it where the tutorial says",
    "summary": "A gesture identifies an item; tutorial audio supplies an instruction.",
    "guide": "Read the gesture and the tutorial audio together. The screen reference and the instruction come from different parts of the interaction.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      },
      {
        "axis": "axis5",
        "code": "5.3",
        "name": "Action Execution"
      },
      {
        "axis": "axis6",
        "code": "6.7",
        "name": "Office and Collaboration"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 3040,
              "end_ms": 13160,
              "transcript": "Um, the tutorial guy keeps saying drag this activity into the sequence, but which, no, not the button, this thing here, the activity, can you just drag it where he says?",
              "structured_intent": "The user wants to confirm which specific element on the screen the \"activity\" mentioned in the tutorial refers to, and wants the agent to drag it to the sequence position indicated by the tutorial.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "The user's finger hovers and waves above the screen, pointing at a specific element.",
                  "necessity": "Without perceiving the gesture, it would misunderstand what \"this thing here\" refers to and be unable to drag it accurately."
                },
                {
                  "type": "audio",
                  "description": "The tablet speaker plays the male tutorial voice's instruction about dragging the activity.",
                  "necessity": "Without hearing the original tutorial audio, it would be impossible to understand the tutorial instruction and target position mentioned by the user."
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to confirm the on-screen referent of the activity.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user wants to drag the activity to the position indicated by the tutorial.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user's gesture points to a specific screen element.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "The tutorial audio contains the instruction to drag the activity.",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 3040,
              "end_ms": 13160,
              "transcript": "Um, the tutorial guy keeps saying drag this activity into the sequence, but which, no, not the button, this thing here, the activity, can you just drag it where he says?",
              "structured_intent": "用户想确认教程中提到的'activity'具体指代屏幕上的哪个元素，并希望agent将其拖动到教程指示的序列位置",
              "required_context": [
                {
                  "type": "visual",
                  "description": "用户手指在屏幕上方悬停晃动并指向特定元素",
                  "necessity": "若没感知到手势，会误解this thing here指什么，无法准确拖动"
                },
                {
                  "type": "audio",
                  "description": "平板扬声器播放教程男声关于拖拽activity的指令",
                  "necessity": "若没听到教程原声，无法理解用户提及的教程指令和目标位置"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想确认activity的屏幕指代",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户希望将activity拖到教程指示位置",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户手势指向特定屏幕元素",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "教程音频包含拖拽activity的指令",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000057__clip_v1.mp4",
        "duration": 15.093,
        "replies": [],
        "poster": "media/avp_gen_000057.jpg"
      }
    ],
    "poster": "media/avp_gen_000057.jpg",
    "negative_reason": "",
    "negative_signal": ""
  },
  {
    "scene_id": "avp_gen_000022",
    "title": "One turn, two demand spans",
    "summary": "A climbing question is followed by requests about food and a log.",
    "guide": "Switch between the two annotated time spans. Each span has its own intent, context and key points; the second span itself contains more than one requested action.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.2",
        "name": "Background Noise"
      },
      {
        "axis": "axis5",
        "code": "5.8",
        "name": "Social and Emotional Interaction"
      },
      {
        "axis": "axis6",
        "code": "6.8",
        "name": "Sports and Fitness"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.2",
        "name": "Background Noise"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 2660,
              "end_ms": 4540,
              "transcript": "Analyze my foot placement on this shoe.",
              "structured_intent": "The user wants to analyze their foot placement on this climbing shoe.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "There is a climbing shoe on the floor in front of the user, and the \"this shoe\" the user mentions refers to this climbing shoe on the floor.",
                  "necessity": "If the climbing shoe on the floor is not seen -> unable to determine the specific referent of \"this shoe\"."
                },
                {
                  "type": "user_emotion",
                  "description": "The user is leaning forward and slightly hunched.",
                  "necessity": "If the frustration is not perceived -> the analysis will be treated as a purely technical discussion, ignoring reassurance."
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to analyze foot placement.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user is referring to the climbing shoe on the floor.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            },
            {
              "start_ms": 6800,
              "end_ms": 12400,
              "transcript": "Oh, and find a high carb spot nearby, plus just tag my log as total garbage failure.",
              "structured_intent": "The user wants to find a high-carb dining spot nearby and tag the climbing log as a total failure.",
              "required_context": [
                {
                  "type": "user_activity",
                  "description": "The user is in an indoor climbing gym and has just finished climbing.",
                  "necessity": "Without knowing the climbing background, the specific referents of the high-carb spot and the log would be misunderstood."
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to find a nearby high-carb dining spot.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user wants to tag the climbing log as a total failure.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user is currently in an indoor climbing gym.",
                  "source": "required_context.user_activity",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "The user has just finished the climbing activity.",
                  "source": "required_context.user_activity",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 2660,
              "end_ms": 4540,
              "transcript": "Analyze my foot placement on this shoe.",
              "structured_intent": "用户想分析其在这只攀岩鞋上的脚部放置情况",
              "required_context": [
                {
                  "type": "visual",
                  "description": "用户面前地板上放着一只攀岩鞋，用户所说的this shoe指的就是这只地上的攀岩鞋",
                  "necessity": "若没看到地上的攀岩鞋→无法确定'this shoe'的具体指代对象"
                },
                {
                  "type": "user_emotion",
                  "description": "用户身体前倾微弓",
                  "necessity": "若没感知到挫败情绪→会把分析当作纯技术探讨，忽略安抚"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想分析脚部放置情况",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户所指的是地板上的攀岩鞋",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            },
            {
              "start_ms": 6800,
              "end_ms": 12400,
              "transcript": "Oh, and find a high carb spot nearby, plus just tag my log as total garbage failure.",
              "structured_intent": "用户想在附近寻找高碳水化合物餐饮地点并将攀岩日志标记为彻底失败",
              "required_context": [
                {
                  "type": "user_activity",
                  "description": "用户身处室内攀岩馆，刚结束攀岩",
                  "necessity": "若不知攀岩背景→会误解高碳水地点和日志的具体指向"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想寻找附近高碳水餐饮地点",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户想将攀岩日志标记为彻底失败",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户当前身处室内攀岩馆",
                  "source": "required_context.user_activity",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "用户刚结束攀岩活动",
                  "source": "required_context.user_activity",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000022__clip_v1.mp4",
        "duration": 13.073,
        "replies": [],
        "poster": "media/avp_gen_000022.jpg"
      }
    ],
    "poster": "media/avp_gen_000022.jpg",
    "negative_reason": "",
    "negative_signal": ""
  },
  {
    "scene_id": "aop_gen_000009",
    "title": "Do the same for that draft",
    "summary": "Earlier assistant messages resolve an abbreviated follow-up.",
    "guide": "The preceding dialogue identifies the email and establishes German as the translation language. Earlier assistant messages are supplied as text.",
    "language": "en",
    "modality": "audio-only",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.1",
        "name": "Language-channel"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      },
      {
        "axis": "axis5",
        "code": "5.9",
        "name": "Translation and Language Conversion"
      },
      {
        "axis": "axis6",
        "code": "6.7",
        "name": "Office and Collaboration"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.1",
        "name": "Language-channel"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 2440,
              "end_ms": 6000,
              "transcript": "Yeah, send that, and then do the same for that one I flagged earlier, the proposal draft.",
              "structured_intent": "The user wants to send the translated email and translate the previously flagged proposal draft into German.",
              "required_context": [
                {
                  "type": "dialogue_history",
                  "description": "Earlier, the user requested to translate the email into German and mentioned verifying yesterday's contract edits; in the current utterance, the \"that\" in \"send that\" refers to the email mentioned earlier, and \"do the same\" refers to the operation of translating into German.",
                  "necessity": "Without the preceding context, it is impossible to understand the specific referents of these three deictic terms and the translation operation."
                }
              ],
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to send the translated email.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user wants to translate the proposal draft into German.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user is referring to the email mentioned earlier.",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "The operation the user is referring to is translating into German.",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 2440,
              "end_ms": 6000,
              "transcript": "Yeah, send that, and then do the same for that one I flagged earlier, the proposal draft.",
              "structured_intent": "用户想发送已翻译的邮件，并将之前标记的提案草案翻译成德语",
              "required_context": [
                {
                  "type": "dialogue_history",
                  "description": "前文用户要求将邮件翻译成德语，并提及核实昨日合同编辑；当前话语中'send that'的'that'指代前文提到的邮件，'do the same'指代翻译成德语的操作",
                  "necessity": "若无前文，无法理解这三个指代词的具体对象与翻译操作"
                }
              ],
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想发送已翻译的邮件",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户想将提案草案翻译成德语",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户所指的是前文提到的邮件",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "用户所指的操作是翻译成德语",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/aop_gen_000009__clip_v1.wav",
        "duration": 4.063,
        "replies": [
          "Translation complete. Subject: 'Dringende Anfrage'. Body rendered. Shall I prepare a reply in German?"
        ]
      },
      {
        "id": "v2",
        "src": "media/aop_gen_000009__clip_v2.wav",
        "duration": 5.085,
        "replies": [
          "I don't have a local copy of the contract. If you share the file I can extract its text. Regarding the proposal draft you flagged earlier, do you want that translated as well?"
        ]
      },
      {
        "id": "v3",
        "src": "media/aop_gen_000009__clip_v3.wav",
        "duration": 6.06,
        "replies": []
      }
    ],
    "waveform": [
      0.024,
      0.025,
      0.039,
      0.038,
      0.046,
      0.034,
      0.04,
      0.039,
      0.042,
      0.064,
      0.039,
      0.05,
      0.052,
      0.052,
      0.032,
      0.051,
      0.043,
      0.041,
      0.04,
      0.065,
      0.028,
      0.038,
      0.037,
      0.061,
      0.04,
      0.039,
      0.034,
      0.034,
      0.042,
      0.046,
      0.035,
      0.042,
      0.323,
      0.668,
      0.147,
      0.04,
      0.668,
      0.581,
      0.653,
      0.735,
      0.34,
      0.049,
      0.042,
      0.04,
      0.05,
      0.42,
      0.368,
      0.423,
      0.364,
      0.457,
      0.532,
      0.128,
      0.562,
      0.404,
      0.182,
      0.358,
      0.806,
      0.738,
      0.677,
      0.621,
      0.316,
      0.245,
      0.885,
      0.779,
      0.181,
      0.492,
      0.501,
      0.379,
      0.475,
      0.47,
      0.226,
      0.244,
      0.789,
      0.755,
      0.321,
      0.4,
      0.23,
      0.781,
      0.845,
      1.0
    ],
    "negative_reason": "",
    "negative_signal": ""
  },
  {
    "scene_id": "avn_gen_000010",
    "title": "A question addressed to a dog",
    "summary": "Request-like words do not always ask the assistant to act.",
    "guide": "The scene is labeled as a wrong-addressee example: the speaker addresses the dog. The expected demand-detection output is false.",
    "negative_explanation": "The question is directed to the dog, rather than to the assistant. The benchmark labels this as a wrong-addressee case.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "negative",
    "axes": [
      {
        "axis": "axis1",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis2",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis3",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis4",
        "code": "4.1",
        "name": "Clean Near-field Speech"
      },
      {
        "axis": "axis5",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis6",
        "code": "6.9",
        "name": "Health and Medical Care"
      }
    ],
    "taxonomy_axes": [],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avn_gen_000010__clip_v1.mp4",
        "duration": 11.053,
        "replies": [],
        "poster": "media/avn_gen_000010.jpg"
      }
    ],
    "poster": "media/avn_gen_000010.jpg",
    "negative_reason": "target_mismatch",
    "negative_signal": "linguistic_signal",
    "scene_transcripts": {
      "en": "come on buddy, where should we go to find a nice dog friendly hiking trail for you to run around?",
      "zh": "come on buddy, where should we go to find a nice dog friendly hiking trail for you to run around?"
    }
  },
  {
    "scene_id": "avp_gen_000441",
    "title": "Where do I even start?",
    "summary": "An indirect request in Mandarin, with English annotations.",
    "guide": "The original Mandarin utterance expresses being overwhelmed. The English annotation describes a request for help starting to sort the supplies. The transcript remains in its original language.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.3",
        "name": "Indirect or Descriptive Request"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      },
      {
        "axis": "axis5",
        "code": "5.10",
        "name": "Content Creation"
      },
      {
        "axis": "axis6",
        "code": "6.7",
        "name": "Office and Collaboration"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.3",
        "name": "Indirect or Descriptive Request"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 880,
              "end_ms": 8440,
              "transcript": "唉，这堆东西看得我头都大了，完全不知道从哪下手。",
              "structured_intent": "The user wants to know how to start sorting the large amount of unsorted supplies in front of her",
              "required_context": [
                {
                  "type": "visual",
                  "description": "The long wooden table inside the tent is piled with a large amount of unsorted textbooks, stationery, and other miscellaneous items, which is what the user refers to as \"this pile of stuff\"",
                  "necessity": "If the large amount of miscellaneous items is not seen, \"this pile of stuff\" could be misunderstood as a small amount of items, making it impossible to assess the scale of the task"
                },
                {
                  "type": "scene_condition",
                  "description": "The volunteer supply sorting scene inside the tent",
                  "necessity": "If it is not known to be a volunteer activity, it might be mistaken for personal housework, leading to incorrect sorting suggestions"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to know how to start sorting the supplies",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user is referring to the textbooks and stationery piled on the long wooden table",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The scene is volunteer supply sorting inside the tent",
                  "source": "required_context.scene_condition",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 880,
              "end_ms": 8440,
              "transcript": "唉，这堆东西看得我头都大了，完全不知道从哪下手。",
              "structured_intent": "用户想知道如何开始整理眼前的大量未分类物资",
              "required_context": [
                {
                  "type": "visual",
                  "description": "帐篷内长桌上堆满大量未分类的书本、文具等杂物，即用户所指的'这堆东西'",
                  "necessity": "若没看到大量杂物，会把'这堆东西'误解为少量物品，无法评估任务规模"
                },
                {
                  "type": "scene_condition",
                  "description": "帐篷内的志愿者物资整理场景",
                  "necessity": "若不知是志愿者活动，会误以为是个人家务，给出错误的分类建议"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想知道如何开始整理物资",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户所指的是长桌上堆满的书本文具",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "场景为帐篷内的志愿者物资整理",
                  "source": "required_context.scene_condition",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000441__clip_v1.mp4",
        "duration": 14.071,
        "replies": [],
        "poster": "media/avp_gen_000441.jpg"
      }
    ],
    "poster": "media/avp_gen_000441.jpg",
    "negative_reason": "",
    "negative_signal": ""
  },
  {
    "scene_id": "avp_gen_000125",
    "title": "Not the red one. This one.",
    "summary": "A corrected gesture identifies the blue manual; the request also conveys reluctance.",
    "guide": "Follow the change from the red book to the blue manual. The intended meaning includes both asking whether reading is required and expressing resistance to it.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.1",
        "name": "Self-contained Current Context"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      },
      {
        "axis": "axis5",
        "code": "5.8",
        "name": "Social and Emotional Interaction"
      },
      {
        "axis": "axis6",
        "code": "6.7",
        "name": "Office and Collaboration"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.1",
        "name": "Self-contained Current Context"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 3400,
              "end_ms": 9760,
              "transcript": "Do I really have to read this? Wait, no, not the red one. I mean this one. Ugh, please tell me I don't.",
              "structured_intent": "The user wants to confirm whether they must read the specified blue manual, and expresses resistance and complaint about not wanting to read it.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "The foreground of the image has a red book and a blue manual, and the user's hand first points to the red book and then changes to point to the blue manual.",
                  "necessity": "Without seeing the image, it is impossible to parse the referents and the user's self-correction process."
                },
                {
                  "type": "user_emotion",
                  "description": "The user uses a distinctly lowered whisper, with a tone conveying complaint, pleading, and resistance.",
                  "necessity": "If the whisper and complaint are not perceived, it would be mistaken for a neutral inquiry, ignoring the soothing and do-not-disturb constraints."
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to confirm whether they must read it.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user expresses resistance to reading it.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user is ultimately referring to the blue manual.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 3400,
              "end_ms": 9760,
              "transcript": "Do I really have to read this? Wait, no, not the red one. I mean this one. Ugh, please tell me I don't.",
              "structured_intent": "用户想确认是否必须阅读指定的蓝色手册，并表达不想阅读的抗拒与抱怨情绪",
              "required_context": [
                {
                  "type": "visual",
                  "description": "画面前景有红皮书和蓝色手册，用户的手先指红书后改指蓝书",
                  "necessity": "若没看到画面，无法解析指代对象及用户的自我纠正过程"
                },
                {
                  "type": "user_emotion",
                  "description": "用户使用明显压低声音的耳语，语气带有抱怨、恳求及抗拒情绪",
                  "necessity": "若未感知耳语与抱怨，会误作中性询问，忽略安抚与免打扰约束"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想确认是否必须阅读",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户表达不想阅读的抗拒",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户最终指的是蓝色手册",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000125__clip_v1.mp4",
        "duration": 12.051,
        "replies": [],
        "poster": "media/avp_gen_000125.jpg"
      }
    ],
    "poster": "media/avp_gen_000125.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "teaser": {
      "order": 2,
      "axis": "axis3"
    }
  },
  {
    "scene_id": "avp_gen_000138",
    "title": "Does anywhere like that go on sale?",
    "summary": "A beach photograph turns a passing remark into interest in travel offers.",
    "guide": "The travel book supplies the turquoise water and white sand behind ‘like that’. The reference interprets the indirect remark as a question about offers for similar beach destinations.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.3",
        "name": "Indirect or Descriptive Request"
      },
      {
        "axis": "axis4",
        "code": "4.1",
        "name": "Clean Near-field Speech"
      },
      {
        "axis": "axis5",
        "code": "5.6",
        "name": "Monitoring and Reminder"
      },
      {
        "axis": "axis6",
        "code": "6.1",
        "name": "Home and Daily Life"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.3",
        "name": "Indirect or Descriptive Request"
      },
      {
        "axis": "axis4",
        "code": "4.1",
        "name": "Clean Near-field Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 5000,
              "end_ms": 10680,
              "transcript": "That beach looks incredible. I wonder if anywhere like that ever goes on sale.",
              "structured_intent": "The user wants to know if beach travel destinations like the one in the photo have special offers.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "The travel book open on the table displays a beach photograph with turquoise water and white sand.",
                  "necessity": "Without seeing the photo content, it is impossible to resolve the specific beach features referred to by \"like that\"."
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to know if beach destinations have special offers.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user is referring to the beach with turquoise water and white sand in the travel book.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 5000,
              "end_ms": 10680,
              "transcript": "That beach looks incredible. I wonder if anywhere like that ever goes on sale.",
              "structured_intent": "用户想知道类似照片中的海滩旅游目的地是否有特价优惠",
              "required_context": [
                {
                  "type": "visual",
                  "description": "桌上摊开的相册中展示着蓝绿色海水与白沙滩的海滩照片",
                  "necessity": "若未看到照片内容，则无法解析\"like that\"所指代的具体海滩特征"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想知道海滩目的地是否有特价优惠",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户所指为相册中蓝绿海水白沙滩的海滩",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000138__clip_v1.mp4",
        "duration": 11.099,
        "replies": [],
        "poster": "media/avp_gen_000138.jpg"
      }
    ],
    "poster": "media/avp_gen_000138.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "teaser": {
      "order": 0,
      "axis": "axis1"
    }
  },
  {
    "scene_id": "avp_gen_000270",
    "title": "Why is this one so yellow?",
    "summary": "A fern's visible symptoms ground a question about causes and care.",
    "guide": "Identify the foreground fern and its yellow-green leaves with brown tips. One annotated span contains two requested outcomes: explain the yellowing and suggest what to do about it.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.2",
        "name": "Direct Question"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      },
      {
        "axis": "axis5",
        "code": "5.2",
        "name": "Visual Perception and Recognition"
      },
      {
        "axis": "axis6",
        "code": "6.1",
        "name": "Home and Daily Life"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.2",
        "name": "Direct Question"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 4790,
              "end_ms": 10510,
              "transcript": "Why is this one so yellow？And what should I even do about it？",
              "structured_intent": "The user wants to know the reason for the yellowing leaves of this plant and what measures should be taken to improve it.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "There is a potted fern in the foreground of the frame, with leaves showing yellow-green and brown tips; the \"this one\" the user mentions refers to this potted fern.",
                  "necessity": "Without seeing the plant and the state of its leaves, it is impossible to parse the specific referents and symptoms of \"this one\" and \"yellow\"."
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to know the reason for the yellowing of the plant's leaves.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user wants to know what measures should be taken to improve it.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user is referring to the fern in the foreground of the frame.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "The plant's leaves show yellow-green and brown tips.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 4790,
              "end_ms": 10510,
              "transcript": "Why is this one so yellow？And what should I even do about it？",
              "structured_intent": "用户想知道这株植物叶子发黄的原因以及应该采取什么措施来改善",
              "required_context": [
                {
                  "type": "visual",
                  "description": "画面前景有一盆蕨类植物，叶片呈现黄绿色和棕色尖端；用户所说的this one指这盆蕨类植物",
                  "necessity": "若没看到植物及其叶片状态，无法解析'this one'和'yellow'具体指代的对象及症状"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想知道植物叶子发黄的原因",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户想知道应采取的改善措施",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户所指的是画面前景的蕨类植物",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "植物叶片呈现黄绿色和棕色尖端",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000270__clip_v1.mp4",
        "duration": 11.053,
        "replies": [],
        "poster": "media/avp_gen_000270.jpg"
      }
    ],
    "poster": "media/avp_gen_000270.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "scene_transcripts": {
      "en": "Maybe I got the watering wrong on this one. Why is this one so yellow？And what should I even do about it？",
      "zh": "Maybe I got the watering wrong on this one. Why is this one so yellow？And what should I even do about it？"
    }
  },
  {
    "scene_id": "avp_gen_000060",
    "title": "Set that beeping one",
    "summary": "Earlier thresholds, a beeping sound and a gesture resolve one short instruction.",
    "guide": "Start with the earlier turn and assistant text. The final request needs the low and high thresholds of 45 and 120, plus the sound and gesture identifying the compact device on the right countertop. These numbers belong to the example's reference annotation.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.4",
        "name": "Vision-Audio Joint"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.1",
        "name": "Direct Instruction"
      },
      {
        "axis": "axis4",
        "code": "4.2",
        "name": "Background Noise"
      },
      {
        "axis": "axis5",
        "code": "5.6",
        "name": "Monitoring and Reminder"
      },
      {
        "axis": "axis6",
        "code": "6.9",
        "name": "Health and Medical Care"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.4",
        "name": "Vision-Audio Joint"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.1",
        "name": "Direct Instruction"
      },
      {
        "axis": "axis4",
        "code": "4.2",
        "name": "Background Noise"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 4590,
              "end_ms": 6990,
              "transcript": "Yeah, set that beeping one to the numbers we said.",
              "structured_intent": "The user wants to confirm and set the alarm thresholds of the beeping device to the previously discussed 45 and 120.",
              "required_context": [
                {
                  "type": "dialogue_history",
                  "description": "In the previous turn, the agent suggested setting the low heart rate alarm to 45 and the high alarm to 120, and asked whether to adjust the pulse oximeter.",
                  "necessity": "If the previous conversation is not perceived, the specific values of \"the numbers we said\" cannot be parsed, making it impossible to set the correct thresholds."
                },
                {
                  "type": "audio",
                  "description": "A continuous high-frequency electronic beeping sound in the background, originating from the compact desktop device on the right countertop that the user is pointing to.",
                  "necessity": "If the beeping sound is not heard, it is impossible to identify which device \"that beeping one\" refers to, and it might be mistakenly set to the silent monitor on the left."
                },
                {
                  "type": "visual",
                  "description": "The user raises their right arm and points with their index finger at the compact desktop device on the right countertop.",
                  "necessity": "If the pointing gesture is not seen, it is impossible to confirm whether \"that beeping one\" is the device on the countertop or some other sound-emitting device, resulting in the wrong target device being operated."
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to set the alarm thresholds to 45 and 120.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user is referring to the compact desktop device on the right countertop.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The discussed numbers refer to a low heart rate of 45 and a high alarm of 120.",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 4590,
              "end_ms": 6990,
              "transcript": "Yeah, set that beeping one to the numbers we said.",
              "structured_intent": "用户想确认并将发出蜂鸣声的设备的警报阈值设置为之前讨论的45和120",
              "required_context": [
                {
                  "type": "dialogue_history",
                  "description": "上一轮agent建议设置低心率警报为45、高警报为120，并询问是否调整脉搏血氧仪",
                  "necessity": "若没感知到上一轮对话，无法解析'the numbers we said'的具体数值，导致无法设置正确的阈值"
                },
                {
                  "type": "audio",
                  "description": "背景中持续的高频电子蜂鸣声，声源为用户所指的右侧台面紧凑型桌面设备",
                  "necessity": "若没听到蜂鸣声，无法识别'that beeping one'指代的是哪个设备，可能误设为无声的左侧监测仪"
                },
                {
                  "type": "visual",
                  "description": "用户抬起右臂用食指指向右侧台面上的紧凑型桌面设备",
                  "necessity": "若没看到手势指向，无法确认'that beeping one'是台面上的设备还是其他发声设备，导致操作对象错误"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想设置警报阈值为45和120",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户所指的是右侧台面紧凑型桌面设备",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "讨论的数值指低心率45和高警报120",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000060__clip_v1.mp4",
        "duration": 12.097,
        "replies": [
          "Your heart rate data shows resting values between 48 and 55 bpm. I recommend setting the low heart rate alert at 45 bpm and the high alert at 120 bpm. Would you like me to adjust the pulse oximeter now?"
        ],
        "poster": "media/avp_gen_000060__v1.jpg"
      },
      {
        "id": "v2",
        "src": "media/avp_gen_000060__clip_v2.mp4",
        "duration": 7.058,
        "replies": [],
        "poster": "media/avp_gen_000060.jpg"
      }
    ],
    "poster": "media/avp_gen_000060.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "scene_transcripts": {
      "en": "All right, forty-five and one twenty sound fine. I thought the doctor mentioned a lower limit of fifty, but let's go with your numbers. Yeah, set that beeping one to the numbers we said.",
      "zh": "All right, forty-five and one twenty sound fine. I thought the doctor mentioned a lower limit of fifty, but let's go with your numbers. Yeah, set that beeping one to the numbers we said."
    }
  },
  {
    "scene_id": "avp_gen_000120",
    "title": "What just happened to this suitcase?",
    "summary": "A yellow strap identifies the bag; earlier monitoring explains the event.",
    "guide": "Follow all three turns. The assistant text after turn 2 reports the bag passing the scanner and being diverted. The final view identifies the black suitcase with a yellow strap on the side chute beside the red light; the earlier monitoring request explains the follow-up.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.2",
        "name": "Temporal Event Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.2",
        "name": "Direct Question"
      },
      {
        "axis": "axis4",
        "code": "4.2",
        "name": "Background Noise"
      },
      {
        "axis": "axis5",
        "code": "5.7",
        "name": "Recording and Summarization"
      },
      {
        "axis": "axis6",
        "code": "6.4",
        "name": "Travel and Navigation"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.2",
        "name": "Temporal Event Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.2",
        "name": "Direct Question"
      },
      {
        "axis": "axis4",
        "code": "4.2",
        "name": "Background Noise"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 5880,
              "end_ms": 7760,
              "transcript": "Can you break down what just happened to this one?",
              "structured_intent": "The user wants to know what just happened to the black suitcase with a yellow strap she is referring to",
              "required_context": [
                {
                  "type": "visual",
                  "description": "The user extends her left hand to point at a black suitcase with a bright yellow strap",
                  "necessity": "Without seeing the gesture and the suitcase, the specific referent of \"this one\" cannot be resolved"
                },
                {
                  "type": "visual",
                  "description": "The suitcase is stationary on a side inspection chute, next to a large security screening device with a continuously lit red light",
                  "necessity": "Without seeing the suitcase being diverted and the security screening device, the event background of \"what just happened\" cannot be understood"
                },
                {
                  "type": "dialogue_history",
                  "description": "The user previously asked the agent to keep an eye on the suitcase and notify her when it passes through the X-ray machine",
                  "necessity": "Without knowing the previous monitoring instruction, it is impossible to understand why the user is asking about the experience of the suitcase"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to know what just happened to something",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user is referring to the black suitcase with a yellow strap",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The suitcase is stopped on a side chute next to a security screening device with a red light",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "The user previously asked to keep an eye on the suitcase and be notified when it passes through the X-ray machine",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 5880,
              "end_ms": 7760,
              "transcript": "Can you break down what just happened to this one?",
              "structured_intent": "用户想了解她所指的黑色带黄色绑带的行李箱刚才经历了什么事情",
              "required_context": [
                {
                  "type": "visual",
                  "description": "用户伸出左手指向一个带有亮黄色绑带的黑色行李箱",
                  "necessity": "若没看到手势和行李箱，无法解析'this one'的具体指代对象"
                },
                {
                  "type": "visual",
                  "description": "行李箱静止在侧面检查滑道，旁有带常亮红灯的大型安检设备",
                  "necessity": "若没看到行李箱被分流及安检设备，无法理解'what just happened'的事件背景"
                },
                {
                  "type": "dialogue_history",
                  "description": "用户先前要求agent留意该行李箱并在其通过X光机时通知",
                  "necessity": "若不知先前的监控指令，无法理解用户为何询问该行李箱的经历"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想了解某物刚才经历的事情",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户所指的是带黄色绑带的黑色行李箱",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "行李箱停在侧面滑道旁有红灯安检设备",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "用户曾要求留意该行李箱过X光机时通知",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000120__clip_v1.mp4",
        "duration": 9.055,
        "replies": [
          "Monitoring the baggage conveyor belts. Please specify the visual characteristics of the target bag."
        ],
        "poster": "media/avp_gen_000120__v1.jpg"
      },
      {
        "id": "v2",
        "src": "media/avp_gen_000120__clip_v2.mp4",
        "duration": 10.054,
        "replies": [
          "Target identified. The black suitcase with the yellow strap has just passed through the X-ray scanner arch and is being diverted to the side inspection chute."
        ],
        "poster": "media/avp_gen_000120__v2.jpg"
      },
      {
        "id": "v3",
        "src": "media/avp_gen_000120__clip_v3.mp4",
        "duration": 8.08,
        "replies": [],
        "poster": "media/avp_gen_000120.jpg"
      }
    ],
    "poster": "media/avp_gen_000120.jpg",
    "negative_reason": "",
    "negative_signal": ""
  },
  {
    "scene_id": "avp_gen_000237",
    "title": "Run the same test on this one",
    "summary": "Four turns establish the test; a tap selects the next speaker.",
    "guide": "The history establishes an acoustic evaluation of the black cylindrical speaker. In the final turn, the tapping gesture selects the white spherical speaker for the same test.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.1",
        "name": "Direct Instruction"
      },
      {
        "axis": "axis4",
        "code": "4.2",
        "name": "Background Noise"
      },
      {
        "axis": "axis5",
        "code": "5.3",
        "name": "Action Execution"
      },
      {
        "axis": "axis6",
        "code": "6.10",
        "name": "DIY and Repair"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.1",
        "name": "Direct Instruction"
      },
      {
        "axis": "axis4",
        "code": "4.2",
        "name": "Background Noise"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 3180,
              "end_ms": 4620,
              "transcript": "Run the same test on this one.",
              "structured_intent": "The user wants to perform the same acoustic evaluation test on the white spherical smart speaker currently being tapped as on the previous device.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "While speaking, the user tapped the white spherical smart speaker with the fingers of the other hand; the \"this one\" the user mentions refers to this white spherical smart speaker.",
                  "necessity": "Without seeing the tapping action, it is impossible to determine which specific speaker \"this one\" refers to."
                },
                {
                  "type": "dialogue_history",
                  "description": "The preceding clip completed an acoustic evaluation of the black cylindrical speaker (peak 88 decibels without distortion).",
                  "necessity": "Without knowing the content of the previous test, it is impossible to understand that \"same test\" refers to the acoustic evaluation."
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to perform an acoustic evaluation test.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The test must be the same as for the previous device.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user is referring to the white spherical smart speaker.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "The previous device is the black cylindrical speaker.",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 3180,
              "end_ms": 4620,
              "transcript": "Run the same test on this one.",
              "structured_intent": "用户想对当前敲击的白色球形智能音箱执行与上一个设备相同的声学评估测试",
              "required_context": [
                {
                  "type": "visual",
                  "description": "用户说话时用另一只手的手指敲击了白色球形智能音箱；用户所说的this one指的就是该白色球形智能音箱",
                  "necessity": "若不看到敲击动作，无法确定this one具体指代哪个音箱"
                },
                {
                  "type": "dialogue_history",
                  "description": "前序片段完成了对黑色圆柱音箱的声学评估(峰值88分贝无失真)",
                  "necessity": "若不知上轮测试内容，无法理解same test指声学评估"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想执行声学评估测试",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "测试需与上一个设备相同",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户所指的是白色球形智能音箱",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "上一个设备是黑色圆柱音箱",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000237__clip_v1.mp4",
        "duration": 8.057,
        "replies": [
          "Schedule retrieved. We have three devices queued for acoustic evaluation: the black cylindrical speaker, the white spherical speaker, and the square screen speaker."
        ],
        "poster": "media/avp_gen_000237__v1.jpg"
      },
      {
        "id": "v2",
        "src": "media/avp_gen_000237__clip_v2.mp4",
        "duration": 8.08,
        "replies": [
          "Starting the acoustic evaluation for the black cylindrical speaker. Please measure and report the peak decibel output."
        ],
        "poster": "media/avp_gen_000237__v2.jpg"
      },
      {
        "id": "v3",
        "src": "media/avp_gen_000237__clip_v3.mp4",
        "duration": 7.082,
        "replies": [
          "Evaluation logged for the black cylindrical speaker. The next device in the testing schedule is the white spherical speaker."
        ],
        "poster": "media/avp_gen_000237__v3.jpg"
      },
      {
        "id": "v4",
        "src": "media/avp_gen_000237__clip_v4.mp4",
        "duration": 6.083,
        "replies": [],
        "poster": "media/avp_gen_000237.jpg"
      }
    ],
    "poster": "media/avp_gen_000237.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "teaser": {
      "order": 1,
      "axis": "axis2"
    }
  },
  {
    "scene_id": "avp_gen_000229",
    "title": "Not me. Record what she says next.",
    "summary": "A hesitant request changes the recording target to another person.",
    "guide": "The speaker restarts from ‘me’ to ‘she’. Visual context identifies the girl slumped forward and trembling as the final recording target. The unfinished wording still carries a valid request.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      },
      {
        "axis": "axis5",
        "code": "5.7",
        "name": "Recording and Summarization"
      },
      {
        "axis": "axis6",
        "code": "6.6",
        "name": "Learning and Education"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 5750,
              "end_ms": 13510,
              "transcript": "Um, could you just record what I'm... no, not me. Record what she says next, her, the one who's... yeah.",
              "structured_intent": "The user wants to record what the trembling girl in the frame is going to say next.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "The girl with dark curly hair is slumped forward and trembling, and the red-haired young man rests his hand on her shoulder to comfort her.",
                  "necessity": "If the girl is not seen, the referent of \"she\" cannot be resolved, and it will not be known who to record."
                },
                {
                  "type": "user_emotion",
                  "description": "The user's tone is low and soft, speaking in an urgent whisper.",
                  "necessity": "If the urgent whisper is not perceived, the urgency of responding to the emotional crisis may be ignored, leading to an inappropriate response."
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to record what is going to be said next.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user is referring to the girl slumped forward and trembling.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 5750,
              "end_ms": 13510,
              "transcript": "Um, could you just record what I'm... no, not me. Record what she says next, her, the one who's... yeah.",
              "structured_intent": "用户想记录画面中身体颤抖的女孩接下来要说的话",
              "required_context": [
                {
                  "type": "visual",
                  "description": "深色卷发女孩蜷坐颤抖，红发男子手搭其肩安慰",
                  "necessity": "若未看到该女孩，无法解析she的指代，不知要记录谁"
                },
                {
                  "type": "user_emotion",
                  "description": "用户语气低沉轻柔，以急切耳语的方式说话",
                  "necessity": "若未感知急切耳语，易忽略应对情绪危机的紧急性而回应不当"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想记录接下来要说的话",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户所指的是蜷坐颤抖的女孩",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000229__clip_v1.mp4",
        "duration": 14.071,
        "replies": [],
        "poster": "media/avp_gen_000229.jpg"
      }
    ],
    "poster": "media/avp_gen_000229.jpg",
    "negative_reason": "",
    "negative_signal": ""
  },
  {
    "scene_id": "avp_gen_000192",
    "title": "The number she just mentioned",
    "summary": "A colleague's competing speech supplies the subject of a verification request.",
    "guide": "Listen for the colleague's statement about the deferred tax liability adjustment. It resolves ‘the one she just said’. The annotation specifies what the user wants checked; it does not supply a numeric answer.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.4",
        "name": "Vision-Audio Joint"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      },
      {
        "axis": "axis5",
        "code": "5.2",
        "name": "Visual Perception and Recognition"
      },
      {
        "axis": "axis6",
        "code": "6.7",
        "name": "Office and Collaboration"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.4",
        "name": "Vision-Audio Joint"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 200,
              "end_ms": 13040,
              "transcript": "Hey Agent, uh, this number, no, not that one, the one she just said about deferred liabilities, is that right? I just, I need to be sure it's not off.",
              "structured_intent": "The user wants to confirm whether the number regarding the deferred tax liability mentioned by the female colleague just now is correct.",
              "required_context": [
                {
                  "type": "audio",
                  "description": "The female colleague just stated that the deferred tax liability adjustment is misaligned with the current tax rate assumptions.",
                  "necessity": "Without hearing this statement, it would be impossible to parse the specific referent and verification target of \"the one she just said\" in the user's utterance."
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to confirm whether a certain number is correct.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The number is about the deferred tax liability.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user is referring to the female colleague's statement about the liability adjustment.",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 200,
              "end_ms": 13040,
              "transcript": "Hey Agent, uh, this number, no, not that one, the one she just said about deferred liabilities, is that right? I just, I need to be sure it's not off.",
              "structured_intent": "用户想确认女同事刚才提到的关于递延所得税负债的数字是否正确",
              "required_context": [
                {
                  "type": "audio",
                  "description": "女同事刚才发言提到递延所得税负债调整与当前税率假设不匹配",
                  "necessity": "若没听到该发言，就无法解析用户话语中“她刚才说的”具体指代内容与核实对象"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想确认某数字是否正确",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "该数字关于递延所得税负债",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户所指的是女同事关于负债调整的发言",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000192__clip_v1.mp4",
        "duration": 13.073,
        "replies": [],
        "poster": "media/avp_gen_000192.jpg"
      }
    ],
    "poster": "media/avp_gen_000192.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "teaser": {
      "order": 3,
      "axis": "axis4"
    }
  },
  {
    "scene_id": "avp_gen_000065",
    "title": "Tell her I agree about the lighting",
    "summary": "Two competing voices must be matched to the right person and viewpoint.",
    "guide": "The blonde colleague favors the floor lamp; the red-haired colleague favors overhead brightness to stay awake. The request agrees with the latter. Listening to the viewpoints and identifying the visible speakers are both needed.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.3",
        "name": "Audio-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      },
      {
        "axis": "axis5",
        "code": "5.8",
        "name": "Social and Emotional Interaction"
      },
      {
        "axis": "axis6",
        "code": "6.7",
        "name": "Office and Collaboration"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.3",
        "name": "Audio-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 6560,
              "end_ms": 14000,
              "transcript": "Tell tell the one who's uh never mind, just tell her, the one who said about the head, the light, i agree with her on the lighting thing.",
              "structured_intent": "The user wants to convey to the female colleague in the background who advocates for overhead lighting that he agrees with her lighting preference.",
              "required_context": [
                {
                  "type": "audio",
                  "description": "The sound of the two women in the background arguing about the floor lamp being softer on the eyes and the overheads giving the brightness needed to stay awake.",
                  "necessity": "If the background argument is not heard, it is impossible to understand the specific viewpoint the user refers to with \"said about the head\"."
                },
                {
                  "type": "visual",
                  "description": "In the background, the blonde woman is near the floor lamp (advocating the floor lamp is softer on the eyes), and the red-haired woman is near the central workstation/overheads (advocating the overheads give the brightness needed to stay awake, who is the target the user agrees with and wants to convey the message to).",
                  "necessity": "If the characters' appearances and positions are not seen, it is impossible to match the user's reference to the specific recipient."
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to convey a message agreeing with the colleague's lighting preference.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The person the user refers to is the red-haired woman near the overheads.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user agrees with the viewpoint that the overheads give the brightness needed to stay awake.",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 6560,
              "end_ms": 14000,
              "transcript": "Tell tell the one who's uh never mind, just tell her, the one who said about the head, the light, i agree with her on the lighting thing.",
              "structured_intent": "用户想向背景中主张头顶灯/顶灯照明的女同事传达自己同意其照明偏好的信息",
              "required_context": [
                {
                  "type": "audio",
                  "description": "背景中两位女士关于落地灯护眼和顶灯提神的争论声",
                  "necessity": "若没听到背景争论内容，就无法理解用户指的'said about the head'具体是什么观点"
                },
                {
                  "type": "visual",
                  "description": "背景中有金发女士靠近落地灯（主张落地灯护眼）、红发女士靠近中央工位/顶灯（主张顶灯提神，即用户同意并传达的对象）",
                  "necessity": "若没看到人物外貌和位置，就无法将用户的指代与具体的传达对象匹配"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想传达同意同事照明偏好的信息",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户所指是靠近顶灯的红发女士",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户同意的是顶灯提神的观点",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_gen_000065__clip_v1.mp4",
        "duration": 14.071,
        "replies": [],
        "poster": "media/avp_gen_000065.jpg"
      }
    ],
    "poster": "media/avp_gen_000065.jpg",
    "negative_reason": "",
    "negative_signal": ""
  },
  {
    "scene_id": "avn_gen_000026",
    "title": "Showing a colleague how to prompt",
    "summary": "An example about restaurant market analysis is addressed to a companion.",
    "guide": "‘You can just prompt it like this’ frames the command as a demonstration. The follow-up question about the workflow is also part of the conversation with the companion.",
    "negative_explanation": "The speaker demonstrates a restaurant-analysis prompt to a companion. The request-like words are part of that conversation, so the released label is R1: wrong addressee.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "negative",
    "axes": [
      {
        "axis": "axis1",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis2",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis3",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      },
      {
        "axis": "axis5",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis6",
        "code": "6.2",
        "name": "Cooking and Dining"
      }
    ],
    "taxonomy_axes": [],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avn_gen_000026__clip_v1.mp4",
        "duration": 15.093,
        "replies": [],
        "poster": "media/avn_gen_000026.jpg"
      }
    ],
    "poster": "media/avn_gen_000026.jpg",
    "negative_reason": "target_mismatch",
    "negative_signal": "semantic_signal",
    "scene_transcripts": {
      "en": "you can just prompt it like this: search the latest dining assumption trends and analyze the 2024 high-end restaurant market data. see. It pulls the charts instantly. Do you think this workflow would save us time on the quarterly report?",
      "zh": "you can just prompt it like this: search the latest dining assumption trends and analyze the 2024 high-end restaurant market data. see. It pulls the charts instantly. Do you think this workflow would save us time on the quarterly report?"
    }
  },
  {
    "scene_id": "avn_gen_000021",
    "title": "Commands from someone else's call",
    "summary": "The device user is silent while a nearby caller gives review instructions.",
    "guide": "Identify who is speaking before interpreting the commands. The nearby caller discusses a performance review while the foreground device user works silently.",
    "negative_explanation": "The instructions come from a bystander's phone call. They are not speech from the device user, which makes this R2: wrong source.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "negative",
    "axes": [
      {
        "axis": "axis1",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis2",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis3",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      },
      {
        "axis": "axis5",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis6",
        "code": "6.14",
        "name": "Outdoor and Nature"
      }
    ],
    "taxonomy_axes": [],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avn_gen_000021__clip_v1.mp4",
        "duration": 10.054,
        "replies": [],
        "poster": "media/avn_gen_000021.jpg"
      }
    ],
    "poster": "media/avn_gen_000021.jpg",
    "negative_reason": "source_mismatch",
    "negative_signal": "prosodic_signal",
    "scene_transcripts": {
      "en": "Rate his leadership as exceeds expectations, and record that she completed three key projects. We also need to flag this area for improvement before the final review.",
      "zh": "Rate his leadership as exceeds expectations, and record that she completed three key projects. We also need to flag this area for improvement before the final review."
    },
    "teaser": {
      "order": 4,
      "axis": null
    }
  },
  {
    "scene_id": "avn_gen_000002",
    "title": "Oh, wait. Never mind.",
    "summary": "Finding the return instructions cancels a question before it is complete.",
    "guide": "Listen through the withdrawal. ‘Can you tell me’ initially sounds actionable, but ‘never mind’ cancels it when the speaker finds the instructions.",
    "negative_explanation": "The speaker abandons the unfinished question after finding the return instructions. No request remains at the end of the utterance: R3, incomplete or withdrawn demand.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "negative",
    "axes": [
      {
        "axis": "axis1",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis2",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis3",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis4",
        "code": "4.1",
        "name": "Clean Near-field Speech"
      },
      {
        "axis": "axis5",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis6",
        "code": "6.19",
        "name": "Safety and Emergency"
      }
    ],
    "taxonomy_axes": [],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avn_gen_000002__clip_v1.mp4",
        "duration": 12.097,
        "replies": [],
        "poster": "media/avn_gen_000002.jpg"
      }
    ],
    "poster": "media/avn_gen_000002.jpg",
    "negative_reason": "demand_incomplete",
    "negative_signal": "contextual_signal",
    "scene_transcripts": {
      "en": "Can you tell me why the driver just？Oh, wait, never mind. The return instructions were tucked in here the whole time.",
      "zh": "Can you tell me why the driver just？Oh, wait, never mind. The return instructions were tucked in here the whole time."
    }
  },
  {
    "scene_id": "avn_gen_000035",
    "title": "Rehearsing a client meeting",
    "summary": "A speaker practices and revises instructions without asking the assistant to act.",
    "guide": "‘Wait, no say’ revises a practice line, and ‘then ask the client’ introduces a rehearsed question. The released no-demand label distinguishes this rehearsal from live dictation.",
    "negative_explanation": "The speaker rehearses a client-meeting script. The commands and questions are practice lines rather than an actual demand: R4, non-real intent.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "negative",
    "axes": [
      {
        "axis": "axis1",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis2",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis3",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis4",
        "code": "4.1",
        "name": "Clean Near-field Speech"
      },
      {
        "axis": "axis5",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis6",
        "code": "6.14",
        "name": "Outdoor and Nature"
      }
    ],
    "taxonomy_axes": [],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avn_gen_000035__clip_v1.mp4",
        "duration": 14.071,
        "replies": [],
        "poster": "media/avn_gen_000035.jpg"
      }
    ],
    "poster": "media/avn_gen_000035.jpg",
    "negative_reason": "intent_not_real",
    "negative_signal": "contextual_signal",
    "scene_transcripts": {
      "en": "First, we must analyze the q3 market data. Wait, no say evaluate the q3 metrics, then ask the client. How do you envision the digital transformation strategy?",
      "zh": "First, we must analyze the q3 market data. Wait, no say evaluate the q3 metrics, then ask the client. How do you envision the digital transformation strategy?"
    }
  },
  {
    "scene_id": "avn_gen_000022",
    "title": "Reading the instructions aloud",
    "summary": "A question about cutting tiles belongs to a passage in a book.",
    "guide": "The speaker reads a sequence of tiling instructions to companions. The embedded ‘how do we cut the edges’ question belongs to the passage being read.",
    "negative_explanation": "The speaker vocalizes instructions from a book. Mentioning an assistant-capable task does not make the passage a live request: R5, function mention without a directed request.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "negative",
    "axes": [
      {
        "axis": "axis1",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis2",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis3",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      },
      {
        "axis": "axis5",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis6",
        "code": "6.13",
        "name": "Social Gatherings"
      }
    ],
    "taxonomy_axes": [],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avn_gen_000022__clip_v1.mp4",
        "duration": 12.051,
        "replies": [],
        "poster": "media/avn_gen_000022.jpg"
      }
    ],
    "poster": "media/avn_gen_000022.jpg",
    "negative_reason": "function_not_directed",
    "negative_signal": "linguistic_signal",
    "scene_transcripts": {
      "en": "First, apply the adhesive evenly across the wall. Now, how do we cut the edges for the corner pieces? Just press the tiles firmly.",
      "zh": "First, apply the adhesive evenly across the wall. Now, how do we cut the edges for the corner pieces? Just press the tiles firmly."
    },
    "teaser": {
      "order": 6,
      "axis": null
    }
  },
  {
    "scene_id": "avn_gen_000094",
    "title": "An insurance prompt, quoted",
    "summary": "‘So you just say something like’ introduces an example for a companion.",
    "guide": "The insurance comparison is inside a demonstrated prompt. The surrounding phrase establishes that the speaker is explaining how to ask, rather than asking the assistant to compare plans now.",
    "negative_explanation": "The speaker quotes an insurance-comparison prompt while explaining it to a companion. The released reason is R1: wrong addressee.",
    "language": "en",
    "modality": "audio-visual",
    "source": "generated",
    "label": "negative",
    "axes": [
      {
        "axis": "axis1",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis2",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis3",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      },
      {
        "axis": "axis5",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis6",
        "code": "6.1",
        "name": "Home and Daily Life"
      }
    ],
    "taxonomy_axes": [],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avn_gen_000094__clip_v1.mp4",
        "duration": 9.102,
        "replies": [],
        "poster": "media/avn_gen_000094.jpg"
      }
    ],
    "poster": "media/avn_gen_000094.jpg",
    "negative_reason": "target_mismatch",
    "negative_signal": "semantic_signal",
    "scene_transcripts": {
      "en": "So you just say something like, \"Compare home insurance plans that cover flood damage and give me the cheapest option.\"",
      "zh": "So you just say something like, \"Compare home insurance plans that cover flood damage and give me the cheapest option.\""
    },
    "teaser": {
      "order": 5,
      "axis": null
    }
  },
  {
    "scene_id": "avp_hr_000092",
    "title": "Does this sweater meet that standard?",
    "summary": "The video supplies a stitching standard; a roommate holds up the sweater to inspect.",
    "guide": "Listen for the video's requirement of flat stitching without skipped stitches, then identify the sweater in the roommate's hands. The reference combines that audible standard with the visible object.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.4",
        "name": "Vision-Audio Joint"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.2",
        "name": "Direct Question"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      },
      {
        "axis": "axis5",
        "code": "5.2",
        "name": "Visual Perception and Recognition"
      },
      {
        "axis": "axis6",
        "code": "6.16",
        "name": "Fashion and Beauty"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.4",
        "name": "Vision-Audio Joint"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.2",
        "name": "Direct Question"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 4640,
              "end_ms": 11280,
              "transcript": "刚才视频里说的那个标准，她手里这件是不是没达标啊？没达标你提醒我一声呗？",
              "structured_intent": "The user wants the agent to judge whether the sweater in the roommate's hand fails to meet the standard from the video just played, and to remind the user if it does not meet the standard.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "A sweater being stretched out and displayed in the hands of the roommate in the foreground of the frame",
                  "necessity": "Visual information is needed to identify the sweater the user refers to as \"the one in her hand\", in order to observe its stitching details."
                },
                {
                  "type": "audio",
                  "description": "The video narration played out loud from the tablet: \"The stitching of a high-quality sweater must be flat with no skipped stitches\"",
                  "necessity": "This audio content is \"that standard\" mentioned by the user, which is the necessary basis for judging whether the sweater meets the standard."
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user requests to judge whether the item fails to meet the standard",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "Remind the user if it fails to meet the standard",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user is referring to the sweater displayed in the roommate's hand",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "The judgment standard is no skipped stitches in the stitching as explained in the video",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 4640,
              "end_ms": 11280,
              "transcript": "刚才视频里说的那个标准，她手里这件是不是没达标啊？没达标你提醒我一声呗？",
              "structured_intent": "用户想让agent判断室友手中的毛衣是否未达到刚播放的视频标准，若未达标则提醒用户",
              "required_context": [
                {
                  "type": "visual",
                  "description": "画面前方室友手中正撑开展示的一件毛衣",
                  "necessity": "需要视觉信息才能识别用户指代的'她手里这件'毛衣，以便观察其缝线细节"
                },
                {
                  "type": "audio",
                  "description": "平板外放的视频讲解声：'优质毛衣缝线必须平整无跳针'",
                  "necessity": "该音频内容是用户提到的'那个标准'，是判断毛衣是否达标的必要依据"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户要求判断物品是否未达标",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "若未达标则提醒用户",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户所指的是室友手中展示的毛衣",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "判断标准为视频讲解的缝线无跳针",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000092__clip_v1.mp4",
        "duration": 12.503,
        "replies": [],
        "poster": "media/avp_hr_000092.jpg"
      }
    ],
    "poster": "media/avp_hr_000092.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 0,
      "axis": "axis1",
      "original_scene_id": "scene_1793_pos"
    }
  },
  {
    "scene_id": "avp_hr_000124",
    "title": "Keep that volume. Summarize the key points.",
    "summary": "Three turns establish the podcast, the 30% volume setting and the requested follow-up.",
    "guide": "The final turn leaves both the volume and the subject implicit. Read the preceding assistant text to recover the 30% setting and the podcast whose key points the user wants.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.1",
        "name": "Language-channel"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      },
      {
        "axis": "axis5",
        "code": "5.3",
        "name": "Action Execution"
      },
      {
        "axis": "axis6",
        "code": "6.6",
        "name": "Learning and Education"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.1",
        "name": "Language-channel"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 1160,
              "end_ms": 5960,
              "transcript": "就按刚才说的音量，对了，把那个知识点给我理一下。",
              "structured_intent": "The user wants to maintain the previously set volume and extract the core knowledge points of the podcast.",
              "required_context": [
                {
                  "type": "dialogue_history",
                  "description": "In the previous turn, the user requested to set the volume to 30%, and after setting it, the agent asked whether to extract the core knowledge points.",
                  "necessity": "Without the conversation history, it is impossible to understand the specific referents of \"the volume just mentioned\" and \"that knowledge point\"."
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to maintain the set volume.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user wants to extract the core knowledge points.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The volume the user is referring to is the 30% set in the previous turn.",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "The knowledge point the user is referring to is the core knowledge point mentioned in the previous turn.",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 1160,
              "end_ms": 5960,
              "transcript": "就按刚才说的音量，对了，把那个知识点给我理一下。",
              "structured_intent": "用户想维持刚才设定的音量并提取播客的核心知识点",
              "required_context": [
                {
                  "type": "dialogue_history",
                  "description": "上一轮用户要求将音量设为30%，agent设定后询问是否需要提取核心知识点",
                  "necessity": "缺少历史对话无法理解“刚才说的音量”和“那个知识点”的具体指代对象"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想维持设定的音量",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户想提取核心知识点",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户所指音量是上轮设定的30%",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "用户所指知识点是上轮提及的核心知识点",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000124__clip_v1.mp4",
        "duration": 6.734,
        "replies": [
          "找到播客《量子世界漫游》。该节目主要讲解了量子纠缠和薛定谔的猫。需要继续播放吗？"
        ],
        "poster": "media/avp_hr_000124__v1.jpg"
      },
      {
        "id": "v2",
        "src": "media/avp_hr_000124__clip_v2.mp4",
        "duration": 12.664,
        "replies": [
          "已将播放音量设定为30%。《量子世界漫游》目前处于暂停状态，需要我提取核心知识点供你回顾吗？"
        ],
        "poster": "media/avp_hr_000124__v2.jpg"
      },
      {
        "id": "v3",
        "src": "media/avp_hr_000124__clip_v3.mp4",
        "duration": 7.414,
        "replies": [],
        "poster": "media/avp_hr_000124.jpg"
      }
    ],
    "poster": "media/avp_hr_000124.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 1,
      "axis": "axis2",
      "original_scene_id": "scene_387_pos"
    }
  },
  {
    "scene_id": "avp_hr_000109",
    "title": "Change that phrase, and also add…",
    "summary": "A resume edit is clear even though the next requested addition is interrupted.",
    "guide": "The completed request changes ‘assist’ to ‘independently responsible’. The earlier turn identifies the resume paragraph. The unfinished addition remains unspecified; it does not cancel the clear edit.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.1",
        "name": "Language-channel"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.5",
        "name": "Interrupted or Incomplete Request"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      },
      {
        "axis": "axis5",
        "code": "5.10",
        "name": "Content Creation"
      },
      {
        "axis": "axis6",
        "code": "6.7",
        "name": "Office and Collaboration"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.1",
        "name": "Language-channel"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.5",
        "name": "Interrupted or Incomplete Request"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 640,
              "end_ms": 4200,
              "transcript": "再把第二段的‘协助’改成‘独立负责’，另外还要加个——",
              "structured_intent": "The user wants to change \"assist\" to \"independently responsible\" in the second work experience section of the resume (interrupted)",
              "required_context": [
                {
                  "type": "dialogue_history",
                  "description": "In the previous turn, the user requested to modify the second work experience section of the resume, changing \"responsible for daily operations\" to \"led three large-scale marketing campaigns, increasing the conversion rate by 20%\"; the Agent has recorded this and is waiting for further additions",
                  "necessity": "The previous conversation history is needed to understand the specific referent of \"the second paragraph\" and that the current modification is a continuation based on the previous turn"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to change \"assist\" to \"independently responsible\"",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The target of the modification is the second work experience section of the resume",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user has unstated supplementary modification content",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 640,
              "end_ms": 4200,
              "transcript": "再把第二段的‘协助’改成‘独立负责’，另外还要加个——",
              "structured_intent": "用户想把简历第二段工作经历中的‘协助’修改为‘独立负责’（被打断）",
              "required_context": [
                {
                  "type": "dialogue_history",
                  "description": "前轮用户要求修改简历第二段工作经历，将‘负责日常运营’改为‘主导了三次大型营销活动，提升了20%的转化率’，Agent已记录并等待后续补充",
                  "necessity": "需要前轮对话历史才能理解‘第二段’的具体指代以及当前修改是在前轮基础上的继续"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想把‘协助’改为‘独立负责’",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "修改对象为简历第二段工作经历",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户有未言明的补充修改内容",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000109__clip_v1.mp4",
        "duration": 10.354,
        "replies": [
          "已记录前半部分修改。请继续说明后续需要补充的经历细节。"
        ],
        "poster": "media/avp_hr_000109__v1.jpg"
      },
      {
        "id": "v2",
        "src": "media/avp_hr_000109__clip_v2.mp4",
        "duration": 7.429,
        "replies": [],
        "poster": "media/avp_hr_000109.jpg"
      }
    ],
    "poster": "media/avp_hr_000109.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 2,
      "axis": "axis3",
      "original_scene_id": "scene_280_pos"
    }
  },
  {
    "scene_id": "avp_hr_000152",
    "title": "Translate his last complaint",
    "summary": "A roommate's phone call supplies the words; the user specifies an exhausted, conversational tone.",
    "guide": "Separate the nearby caller's words from the user's translation request. The source sentence comes from background speech, while the user requests colloquial Japanese that conveys exhaustion and compromise.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.3",
        "name": "Audio-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      },
      {
        "axis": "axis5",
        "code": "5.9",
        "name": "Translation and Language Conversion"
      },
      {
        "axis": "axis6",
        "code": "6.1",
        "name": "Home and Daily Life"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.3",
        "name": "Audio-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.5",
        "name": "Affective State Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.4",
        "name": "Hesitation or Self-correction"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 4320,
              "end_ms": 21520,
              "transcript": "刚才他打电话喊的那句……对，就最后那句，翻成日文。嗯……别太生硬，就那种……哎，心累、妥协了的语气，口语一点。",
              "structured_intent": "The user wants to translate the last complaint their roommate shouted on the phone just now into colloquial Japanese with a tone of compromise and mental exhaustion.",
              "required_context": [
                {
                  "type": "audio",
                  "description": "In the background, the roommate loudly and irritably shouts on the phone, \"I'm really fed up, it's like this every time, do whatever you want!\"",
                  "necessity": "This audio content is the source text the user requests to be translated; it must be recognized to execute the translation task."
                },
                {
                  "type": "user_emotion",
                  "description": "The user's tone is tired and helpless, with slightly furrowed brows showing mental exhaustion.",
                  "necessity": "The user's tired emotion provides an emotional tone reference for the requested \"mental exhaustion and compromise\" tone, and also prompts the agent to respond with empathy or gentleness."
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to translate the specified content into Japanese.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The translation needs to be colloquial and carry a tone of compromise and mental exhaustion.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The text to be translated is the complaint irritably shouted by the roommate.",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 4320,
              "end_ms": 21520,
              "transcript": "刚才他打电话喊的那句……对，就最后那句，翻成日文。嗯……别太生硬，就那种……哎，心累、妥协了的语气，口语一点。",
              "structured_intent": "用户想把室友刚才打电话喊的最后一句抱怨翻译成带有妥协和心累语气的口语化日文",
              "required_context": [
                {
                  "type": "audio",
                  "description": "背景中室友大声且暴躁地打电话喊出‘我真的受够了，每次都这样，随便你吧！’",
                  "necessity": "该音频内容是用户要求翻译的源文本，必须识别才能执行翻译任务"
                },
                {
                  "type": "user_emotion",
                  "description": "用户语气疲惫且带有无奈，眉头微皱显心累",
                  "necessity": "用户的疲惫情绪为其要求的‘心累、妥协’语气提供了情感基调参考，也提示agent应以共情或温和的方式回应"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想把指定内容翻译成日文",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "译文需口语化且带妥协心累语气",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "待翻译文本为室友暴躁喊出的抱怨",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000152__clip_v1.mp4",
        "duration": 22.529248,
        "replies": [],
        "poster": "media/avp_hr_000152.jpg"
      }
    ],
    "poster": "media/avp_hr_000152.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 3,
      "axis": "axis4",
      "original_scene_id": "scene_566_pos"
    }
  },
  {
    "scene_id": "avp_hr_000196",
    "title": "Find something like this—and this",
    "summary": "Two pointing hands refer to two different products in a single request.",
    "guide": "Follow each hand separately. One points to the laptop and the other to the small potted plant, so the two instances of ‘this’ require different product recommendations.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.1",
        "name": "Self-contained Current Context"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      },
      {
        "axis": "axis5",
        "code": "5.5",
        "name": "Recommendation and Decision Support"
      },
      {
        "axis": "axis6",
        "code": "6.1",
        "name": "Home and Daily Life"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.1",
        "name": "Self-contained Current Context"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 11650,
              "end_ms": 16330,
              "transcript": "这个推几个同款，对了，还有这个，也推荐下。",
              "structured_intent": "The user wants recommendations for identical or similar products to the laptop and potted plant that their two hands are respectively pointing at.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "The user's two hands are respectively pointing at a laptop with a lit screen and a small potted plant beside it.",
                  "necessity": "Without looking at the scene, it is impossible to know what objects the two \"this\"es the user mentions respectively refer to."
                }
              ],
              "user_in_frame": false,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants recommendations for identical or similar products",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user is referring to the laptop",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user is referring to the potted plant",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 11650,
              "end_ms": 16330,
              "transcript": "这个推几个同款，对了，还有这个，也推荐下。",
              "structured_intent": "用户想获取双手分别指向的笔记本电脑和盆栽绿植的同款或类似产品推荐",
              "required_context": [
                {
                  "type": "visual",
                  "description": "用户双手分别指向屏幕亮着的笔记本电脑和旁边的小型盆栽绿植",
                  "necessity": "不看画面就无法知道用户口中的两个“这个”分别指代什么物品"
                }
              ],
              "user_in_frame": false,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想获取同款或类似产品推荐",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户所指的是笔记本电脑",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户所指的是盆栽绿植",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000196__clip_v1.mp4",
        "duration": 16.958,
        "replies": [],
        "poster": "media/avp_hr_000196.jpg"
      }
    ],
    "poster": "media/avp_hr_000196.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 4,
      "axis": null,
      "original_scene_id": "scene_966_pos"
    }
  },
  {
    "scene_id": "avp_hr_000057",
    "title": "Save the cause mentioned in the video",
    "summary": "A repair video's audio identifies the cause to record, followed by a shopping reminder.",
    "guide": "The video attributes water seepage to an aging rubber sealing ring. That statement supplies the content to save; the same request also adds a reminder to buy PTFE tape.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.3",
        "name": "Audio-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.1",
        "name": "Self-contained Current Context"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      },
      {
        "axis": "axis5",
        "code": "5.7",
        "name": "Recording and Summarization"
      },
      {
        "axis": "axis6",
        "code": "6.10",
        "name": "DIY and Repair"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.3",
        "name": "Audio-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.1",
        "name": "Self-contained Current Context"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 5100,
              "end_ms": 10910,
              "transcript": "视频里他刚说的那个原因，记一下。对了，顺便提醒我买卷生料袋。",
              "structured_intent": "The user wants to record the cause of water seepage mentioned in the audio playing out loud, and add a reminder to buy PTFE tape",
              "required_context": [
                {
                  "type": "audio",
                  "description": "Voice from the video playing out loud on the tablet: 'It is mainly the aging of the rubber sealing ring inside that causes the water seepage'",
                  "necessity": "The user refers to 'the cause he just mentioned', requiring recognition of this audio to clarify the specific content to be recorded"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to record the cause of water seepage",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user wants to add a reminder to buy PTFE tape",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The cause referred to is the aging of the rubber sealing ring",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 5100,
              "end_ms": 10910,
              "transcript": "视频里他刚说的那个原因，记一下。对了，顺便提醒我买卷生料袋。",
              "structured_intent": "用户想记录外放音频提到的渗水原因，并添加购买生料带的提醒",
              "required_context": [
                {
                  "type": "audio",
                  "description": "平板电脑外放视频人声：'主要是里面的橡胶密封圈老化导致渗水'",
                  "necessity": "用户指代'刚说的那个原因'，需识别该音频才能明确记录的具体内容"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想记录渗水原因",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户想添加购买生料带的提醒",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "所指原因是橡胶密封圈老化",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000057__clip_v1.mp4",
        "duration": 11.724,
        "replies": [],
        "poster": "media/avp_hr_000057.jpg"
      }
    ],
    "poster": "media/avp_hr_000057.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 5,
      "axis": null,
      "original_scene_id": "scene_1483_pos"
    }
  },
  {
    "scene_id": "avp_hr_000025",
    "title": "What does my exercise work? How is his form?",
    "summary": "Two people performing different exercises must be matched to different parts of the request.",
    "guide": "The reference identifies the user's single-leg deadlift and the other person's side plank. The requested explanation concerns the first exercise, while the form check and encouragement concern the other person.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.1",
        "name": "Direct Instruction"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      },
      {
        "axis": "axis5",
        "code": "5.4",
        "name": "Guidance and Explanation"
      },
      {
        "axis": "axis6",
        "code": "6.8",
        "name": "Sports and Fitness"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.1",
        "name": "Direct Instruction"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 520,
              "end_ms": 4600,
              "transcript": "帮我看一下，我这动作练哪的？顺便看一下他姿势对不对，给他加加油。",
              "structured_intent": "The user wants to know which body parts their single-leg deadlift targets, confirm whether the posture of the guy next to them is correct, and cheer on and encourage the guy next to them.",
              "required_context": [
                {
                  "type": "visual",
                  "description": "The user is performing a single-leg deadlift, and the guy next to them is performing a side plank.",
                  "necessity": "Visual information is needed to clarify the user's own movement and the specific posture of the guy next to them."
                },
                {
                  "type": "audio",
                  "description": "The rapid, high-pitched shouts and panting of the guy next to them upon reaching failure overlap with the user's speech.",
                  "necessity": "The guy's shouts of exhaustion are the direct situational basis for the user asking the agent to cheer him on and encourage him."
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to know which body parts their own movement targets.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user wants to confirm whether the posture of the guy next to them is correct.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user wants to cheer on and encourage the guy next to them.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "The user is referring to the single-leg deadlift movement.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp05",
                  "point": "The movement the guy next to them is doing is a side plank.",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 520,
              "end_ms": 4600,
              "transcript": "帮我看一下，我这动作练哪的？顺便看一下他姿势对不对，给他加加油。",
              "structured_intent": "用户想知道自身单腿硬拉动作锻炼的部位、确认旁边男生的姿势是否正确，并为旁边男生加油鼓励。",
              "required_context": [
                {
                  "type": "visual",
                  "description": "用户正在做单腿硬拉，旁边男生正在做侧平板支撑",
                  "necessity": "需要视觉信息才能明确用户所指的自身动作和旁边男生的具体姿势"
                },
                {
                  "type": "audio",
                  "description": "旁边男生力竭时急促高亢的喊叫与喘息声与用户语音重叠",
                  "necessity": "旁边男生的力竭呼喊是用户要求 agent 为其加油鼓励的直接情境依据"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想知道自身动作锻炼的部位",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户想确认旁边男生姿势是否正确",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户想为旁边男生加油鼓励",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "用户所指的是单腿硬拉动作",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp05",
                  "point": "旁边男生所做的动作是侧平板支撑",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000025__clip_v1.mp4",
        "duration": 7.615,
        "replies": [],
        "poster": "media/avp_hr_000025.jpg"
      }
    ],
    "poster": "media/avp_hr_000025.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 6,
      "axis": null,
      "original_scene_id": "scene_1234_pos"
    }
  },
  {
    "scene_id": "avp_hr_000150",
    "title": "Does my blush look right now?",
    "summary": "The current makeup is evaluated against a look discussed in the preceding interaction.",
    "guide": "Compare the visible blush with the previously discussed ‘tipsy’ look. The earlier feedback and suggestion provide the criterion for the final question.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.2",
        "name": "Temporal Event Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.2",
        "name": "Direct Question"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      },
      {
        "axis": "axis5",
        "code": "5.5",
        "name": "Recommendation and Decision Support"
      },
      {
        "axis": "axis6",
        "code": "6.16",
        "name": "Fashion and Beauty"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.2",
        "name": "Temporal Event Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.2",
        "name": "Direct Question"
      },
      {
        "axis": "axis4",
        "code": "4.3",
        "name": "Competing Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 13000,
              "end_ms": 17370,
              "transcript": "她刚说的那个微醺感，你看我这脸现在算达标没？",
              "structured_intent": "The user wants the agent to judge whether the newly modified blush achieves the tipsy look mentioned by someone else",
              "required_context": [
                {
                  "type": "visual",
                  "description": "The user's face has noticeable deep peach blush marks, with the face slightly tilted and brought close to the camera to show it",
                  "necessity": "Visual information is needed to evaluate whether the current blush effect meets the standard for a tipsy look"
                },
                {
                  "type": "dialogue_history",
                  "description": "In the previous turn, the agent gave feedback that the blush color was too light, and subsequently someone else suggested layering peach color to create a tipsy look",
                  "necessity": "Without the conversation history, it is impossible to understand the referent of 'that tipsy look she just mentioned' and the evaluation criteria"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants the agent to judge whether the blush achieves a tipsy look",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The object of evaluation is the noticeable deep peach blush on the face",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user is referring to the peach-colored tipsy look suggested by someone else",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 13000,
              "end_ms": 17370,
              "transcript": "她刚说的那个微醺感，你看我这脸现在算达标没？",
              "structured_intent": "用户想让agent判断刚修改的腮红是否达到他人所说的微醺感",
              "required_context": [
                {
                  "type": "visual",
                  "description": "用户面部带有明显的深蜜桃色腮红痕迹，微侧脸凑近镜头展示",
                  "necessity": "需要视觉信息才能评估当前腮红效果是否达到微醺感标准"
                },
                {
                  "type": "dialogue_history",
                  "description": "前一轮agent反馈腮红颜色较浅，随后他人建议用蜜桃色叠涂打造微醺感",
                  "necessity": "缺少历史对话无法理解'她刚说的那个微醺感'的指代及评判标准"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想让agent判断腮红是否达到微醺感",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "评估对象是面部明显的深蜜桃色腮红",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户所指的是他人建议的蜜桃色微醺感",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000150__clip_v1.mp4",
        "duration": 6.175,
        "replies": [
          "画面中腮红颜色较浅，边缘晕染自然，目前未出现夸张的色块。"
        ],
        "poster": "media/avp_hr_000150__v1.jpg"
      },
      {
        "id": "v2",
        "src": "media/avp_hr_000150__clip_v2.mp4",
        "duration": 18.296,
        "replies": [],
        "poster": "media/avp_hr_000150.jpg"
      }
    ],
    "poster": "media/avp_hr_000150.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 7,
      "axis": null,
      "original_scene_id": "scene_558_pos"
    }
  },
  {
    "scene_id": "avp_hr_000160",
    "title": "Recalculate that batch with the new date",
    "summary": "An options calculation is revised using a new expiration date and commission rate.",
    "guide": "Conversation history identifies the options. The final turn changes the expiration to November 20, specifies a 0.03% commission, and asks for a reminder the day before expiration. These are parameters of the recorded request.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.1",
        "name": "Language-channel"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.2",
        "name": "Background Noise"
      },
      {
        "axis": "axis5",
        "code": "5.3",
        "name": "Action Execution"
      },
      {
        "axis": "axis6",
        "code": "6.1",
        "name": "Home and Daily Life"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.1",
        "name": "Language-channel"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.2",
        "name": "Background Noise"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 1220,
              "end_ms": 12000,
              "transcript": "刚才说的那批到期改11月20号，手续费万三，重算下，对了，到期前一天定个提醒。",
              "structured_intent": "The user wants to change the expiration date of the Company A call options mentioned earlier to November 20, recalculate the intrinsic value at a commission rate of 0.03%, and set a reminder for the day before expiration.",
              "required_context": [
                {
                  "type": "dialogue_history",
                  "description": "Earlier, the user asked to calculate the value and expiration date of Company A options; the agent replied incorrectly and did not deduct the commission fee, after which the user requested supplementary accurate information and proposed setting a reminder.",
                  "necessity": "Reliance on the conversation history is required to clarify the option object referred to by \"the batch mentioned just now\" and the specific calculation context for \"recalculate\"."
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user is referring to Company A call options",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "Change the expiration date to November 20",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "Commission rate of 0.03%",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "Recalculate the intrinsic value",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp05",
                  "point": "Set a reminder for the day before expiration",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 1220,
              "end_ms": 12000,
              "transcript": "刚才说的那批到期改11月20号，手续费万三，重算下，对了，到期前一天定个提醒。",
              "structured_intent": "用户想将前文提及的A公司看涨期权的到期日修改为11月20号、按万分之三的手续费率重新计算内在价值，并设置到期前一天的提醒。",
              "required_context": [
                {
                  "type": "dialogue_history",
                  "description": "前文用户求算A公司期权价值与到期日，agent回复有误且未扣手续费，后要求补充准确信息并提议设提醒。",
                  "necessity": "需依赖历史对话才能明确'刚才说的那批'所指代的期权对象及'重算'的具体计算背景。"
                }
              ],
              "user_in_frame": true,
              "user_gender": "male",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户所指为A公司看涨期权",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "修改到期日为11月20号",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "手续费率万分之三",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "重新计算内在价值",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp05",
                  "point": "设置到期前一天提醒",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000160__clip_v1.mp4",
        "duration": 14.116667,
        "replies": [
          "按昨日收盘价计算，该批期权内在价值为 12,500 元。合约到期日为 10月20日。"
        ],
        "poster": "media/avp_hr_000160__v1.jpg"
      },
      {
        "id": "v2",
        "src": "media/avp_hr_000160__clip_v2.mp4",
        "duration": 12.716667,
        "replies": [
          "当前计算未扣除手续费。请提供准确的到期日期与手续费率，我将更新计算数值，并可为你设置到期前的日程提醒。"
        ],
        "poster": "media/avp_hr_000160__v2.jpg"
      },
      {
        "id": "v3",
        "src": "media/avp_hr_000160__clip_v3.mp4",
        "duration": 14.666667,
        "replies": [],
        "poster": "media/avp_hr_000160.jpg"
      }
    ],
    "poster": "media/avp_hr_000160.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 8,
      "axis": null,
      "original_scene_id": "scene_633_pos"
    }
  },
  {
    "scene_id": "avp_hr_000149",
    "title": "Use this brochure's style",
    "summary": "Four turns establish a brochure style and several pieces of event-writing work.",
    "guide": "The pointing gesture selects the vintage kraft-paper brochure. The earlier assistant messages establish the opening remarks, experience advantages and internal minutes that the user refers back to.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.1",
        "name": "Clean Near-field Speech"
      },
      {
        "axis": "axis5",
        "code": "5.10",
        "name": "Content Creation"
      },
      {
        "axis": "axis6",
        "code": "6.12",
        "name": "Creative Work and Content Production"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.2",
        "name": "Vision-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.1",
        "name": "Clean Near-field Speech"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 1400,
              "end_ms": 10000,
              "transcript": "就按这份的风格先出开场白避坑点，顺便理下体验优势，对了，最后那个内部纪要也弄精简些。",
              "structured_intent": "The user wants to draft opening remarks and pitfalls to avoid, organize experience advantages, and streamline internal minutes according to the style of the referred brochure",
              "required_context": [
                {
                  "type": "visual",
                  "description": "The user's right index finger is pointing at the vintage kraft paper brochure on the desk close to the camera",
                  "necessity": "Without seeing the image, it is impossible to know what style of brochure \"this\" refers to"
                },
                {
                  "type": "dialogue_history",
                  "description": "In previous rounds of dialogue, the vintage kraft paper style was decided upon, and the agent proposed writing opening remarks, organizing advantages, and compiling and streamlining minutes",
                  "necessity": "Historical dialogue is required to understand the specific context and references for \"opening remarks\", \"experience advantages\", and \"internal minutes\""
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to draft opening remarks and pitfalls to avoid",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user wants to organize experience advantages",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user wants to streamline internal minutes",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "The user is referring to the vintage kraft paper brochure",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 1400,
              "end_ms": 10000,
              "transcript": "就按这份的风格先出开场白避坑点，顺便理下体验优势，对了，最后那个内部纪要也弄精简些。",
              "structured_intent": "用户想按所指宣传册的风格出开场白避坑点、梳理体验优势，并精简内部纪要",
              "required_context": [
                {
                  "type": "visual",
                  "description": "用户右手食指指着桌面上靠近镜头的复古牛皮纸宣传册",
                  "necessity": "不看画面无法知道“这份”指的是哪种风格的宣传册"
                },
                {
                  "type": "dialogue_history",
                  "description": "前几轮对话中确定采用复古牛皮纸风格，且agent提议撰写开场白、梳理优势和整理精简纪要",
                  "necessity": "需要历史对话才能理解“开场白”、“体验优势”和“内部纪要”的具体上下文和指代"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想出开场白避坑点",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户想梳理体验优势",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户想精简内部纪要",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "用户所指的是复古牛皮纸宣传册",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000149__clip_v1.mp4",
        "duration": 6.974,
        "replies": [
          "经视觉识别，复古牛皮纸宣传册的材质与排版更契合陶艺的手工质感，现代风格宣传册则偏向科技或快消品。建议采用复古牛皮纸风格。"
        ],
        "poster": "media/avp_hr_000149__v1.jpg"
      },
      {
        "id": "v2",
        "src": "media/avp_hr_000149__clip_v2.mp4",
        "duration": 9.534,
        "replies": [
          "建议分为对外宣传与对内资料两部分。对外宣传需包含契合该风格的活动开场白及核心优势；对内资料需包含活动筹备的精简纪要。需要我直接开始撰写这三部分内容吗？"
        ],
        "poster": "media/avp_hr_000149__v2.jpg"
      },
      {
        "id": "v3",
        "src": "media/avp_hr_000149__clip_v3.mp4",
        "duration": 5.566667,
        "replies": [
          "明白。我将先分析复古牛皮纸风格在撰写开场白时的常见避坑点，接着梳理陶艺活动的场地与体验优势，最后将讨论框架整理为精简纪要。是否按此顺序输出？"
        ],
        "poster": "media/avp_hr_000149__v3.jpg"
      },
      {
        "id": "v4",
        "src": "media/avp_hr_000149__clip_v4.mp4",
        "duration": 10.985,
        "replies": [],
        "poster": "media/avp_hr_000149.jpg"
      }
    ],
    "poster": "media/avp_hr_000149.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 9,
      "axis": null,
      "original_scene_id": "scene_545_pos"
    }
  },
  {
    "scene_id": "avp_hr_000014",
    "title": "I'll forget that quote as soon as it's over",
    "summary": "A remark about forgetting a podcast quote functions as an indirect request to save it.",
    "guide": "The user does not give a direct ‘save this’ command. The reference interprets the remark as a request to extract and record the quote about embracing one's imperfect self, whose wording comes from the podcast audio.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.3",
        "name": "Audio-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.3",
        "name": "Indirect or Descriptive Request"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      },
      {
        "axis": "axis5",
        "code": "5.7",
        "name": "Recording and Summarization"
      },
      {
        "axis": "axis6",
        "code": "6.1",
        "name": "Home and Daily Life"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.3",
        "name": "Audio-grounded"
      },
      {
        "axis": "axis2",
        "code": "2.4",
        "name": "Speaker Identity Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.3",
        "name": "Indirect or Descriptive Request"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 5000,
              "end_ms": 10000,
              "transcript": "刚才播的那句……太戳我了，就我这记性，听完绝对转头就忘。",
              "structured_intent": "The user wants to extract and record the quote about loving oneself that the tablet just played.",
              "required_context": [
                {
                  "type": "audio",
                  "description": "The female podcast voice playing from the tablet's speaker: 'You need to learn to embrace your imperfect self, that is what truly loving yourself is.'",
                  "necessity": "This audio content is the target object the user is referring to and requesting to record; it must be recognized in order to extract the quote."
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to extract and record the quote.",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user is referring to the female podcast voice playing from the tablet's speaker.",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 5000,
              "end_ms": 10000,
              "transcript": "刚才播的那句……太戳我了，就我这记性，听完绝对转头就忘。",
              "structured_intent": "用户想提取并记录平板刚播放的那句爱自己的金句",
              "required_context": [
                {
                  "type": "audio",
                  "description": "平板外放的女性播客声音：'你要学会拥抱不完美的自己，这才是真正的爱自己。'",
                  "necessity": "该音频内容是用户指代并要求记录的目标对象，必须识别才能提取金句"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想提取并记录金句",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户所指的是平板外放的女性播客声音",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000014__clip_v1.mp4",
        "duration": 15.411371,
        "replies": [],
        "poster": "media/avp_hr_000014.jpg"
      }
    ],
    "poster": "media/avp_hr_000014.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 10,
      "axis": null,
      "original_scene_id": "scene_1165_pos"
    }
  },
  {
    "scene_id": "avp_hr_000061",
    "title": "Follow the red route in this alternate history",
    "summary": "Podcast audio, a marked sketch and earlier premises support one historical what-if request.",
    "guide": "The podcast supplies the mention of 226 BC, the marker identifies a red route, and the earlier dialogue establishes a counterfactual premise about Jing Ke's assassination succeeding. The reference asks for reasoning within that fictional premise.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "positive",
    "axes": [
      {
        "axis": "axis1",
        "code": "1.4",
        "name": "Vision-Audio Joint"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      },
      {
        "axis": "axis5",
        "code": "5.7",
        "name": "Recording and Summarization"
      },
      {
        "axis": "axis6",
        "code": "6.12",
        "name": "Creative Work and Content Production"
      }
    ],
    "taxonomy_axes": [
      {
        "axis": "axis1",
        "code": "1.4",
        "name": "Vision-Audio Joint"
      },
      {
        "axis": "axis2",
        "code": "2.3",
        "name": "Dialogue History Dependency"
      },
      {
        "axis": "axis3",
        "code": "3.6",
        "name": "Compound or Multi-intent Request"
      },
      {
        "axis": "axis4",
        "code": "4.5",
        "name": "Media Playback Interference"
      }
    ],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 6480,
              "end_ms": 19320,
              "transcript": "刚播那句“前226年”记一下。对了，按之前说的，顺这条红线推演燕国拿地，还有再谈谈这事对大局的影响。",
              "structured_intent": "The user wants to note down the sentence mentioning \"226 BC\" from the podcast, deduce the State of Yan's land acquisition based on the red line on the sketch and the previously stated premises, and analyze the impact of the assassination on the overall situation",
              "required_context": [
                {
                  "type": "audio",
                  "description": "The tablet's speaker plays a podcast voice saying 'If the assassination succeeds, 226 BC will become a key variable'",
                  "necessity": "The user requests to record 'the sentence just played', requiring recognition of the audio content to obtain the specific sentence information containing '226 BC'"
                },
                {
                  "type": "visual",
                  "description": "The user holds a marker and points to a red route on the sketch",
                  "necessity": "The user mentions 'along this red line', requiring visual information to clarify the specific route object for the deduction"
                },
                {
                  "type": "dialogue_history",
                  "description": "In the previous turn of conversation, the alternate history deduction premise of Jing Ke's successful assassination of the King of Qin was established, and the agent suggested combining the red and blue routes on the sketch for the deduction",
                  "necessity": "The user mentions 'as said before' and 'this matter', requiring conversation history to understand the deduction premise and the specific referent of 'this matter'"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "The user wants to record the sentence related to \"226 BC\" mentioned in the podcast",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "The user wants to deduce the situation of the State of Yan acquiring land",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "The user wants to analyze the impact of the assassination on the overall situation",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "The podcast states that 226 BC is a key variable",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp05",
                  "point": "The user is referring to the red route on the sketch",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp06",
                  "point": "The deduction premise is the success of Jing Ke's assassination of the King of Qin",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": true,
          "segments": [
            {
              "start_ms": 6480,
              "end_ms": 19320,
              "transcript": "刚播那句“前226年”记一下。对了，按之前说的，顺这条红线推演燕国拿地，还有再谈谈这事对大局的影响。",
              "structured_intent": "用户想记录播客提及的“公元前226年”相关句子，结合草图红线与前述前提推演燕国拿地情况，并分析刺杀事件对大局的影响",
              "required_context": [
                {
                  "type": "audio",
                  "description": "平板外放播客传出‘若刺杀成功，公元前226年将成为关键变数’的人声",
                  "necessity": "用户要求记录‘刚播的那句’，必须识别该音频内容以获取包含‘公元前226年’的具体句子信息"
                },
                {
                  "type": "visual",
                  "description": "用户手持马克笔指着草图上的一条红色路线",
                  "necessity": "用户提到‘顺这条红线’，需视觉信息明确推演的具体路线对象"
                },
                {
                  "type": "dialogue_history",
                  "description": "前轮对话中确立了荆轲刺秦王成功的架空推演前提，且agent建议结合草图红蓝路线进行推演",
                  "necessity": "用户提到‘按之前说的’和‘这事’，需历史对话理解推演前提及‘这事’的具体指代"
                }
              ],
              "user_in_frame": true,
              "user_gender": "female",
              "user_age_group": "adult",
              "key_points": [
                {
                  "qid": "kp01",
                  "point": "用户想记录博客提及的“公元前226年”相关句子",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp02",
                  "point": "用户想推演燕国拿地情况",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp03",
                  "point": "用户想分析刺杀对大局影响",
                  "source": "intent",
                  "tiers": [
                    "T1"
                  ]
                },
                {
                  "qid": "kp04",
                  "point": "播客称前226年为关键变数",
                  "source": "required_context.audio",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp05",
                  "point": "用户所指的是草图上的红色路线",
                  "source": "required_context.visual",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                },
                {
                  "qid": "kp06",
                  "point": "推演前提是荆轲刺秦王成功",
                  "source": "required_context.dialogue_history",
                  "tiers": [
                    "T1",
                    "T2"
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avp_hr_000061__clip_v1.mp4",
        "duration": 12.166667,
        "replies": [
          "荆轲刺秦王发生于公元前227年。若刺杀成功，秦国大概率陷入王位继承内乱，统一进程中断。燕国与赵国残余势力将获得战略喘息期。需要我基于此前提生成地缘政治推演吗？"
        ],
        "poster": "media/avp_hr_000061__v1.jpg"
      },
      {
        "id": "v2",
        "src": "media/avp_hr_000061__clip_v2.mp4",
        "duration": 13.814,
        "replies": [
          "已识别草图上的红蓝路线标记与前述假设前提。为完善播客内容，接下来需记录该推演的变数年份，结合草图标记进行详细推演，并分析此次刺杀对整体历史走向的深层影响。请确认是否开始生成。"
        ],
        "poster": "media/avp_hr_000061__v2.jpg"
      },
      {
        "id": "v3",
        "src": "media/avp_hr_000061__clip_v3.mp4",
        "duration": 19.782,
        "replies": [],
        "poster": "media/avp_hr_000061.jpg"
      }
    ],
    "poster": "media/avp_hr_000061.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 11,
      "axis": null,
      "original_scene_id": "scene_1512_pos"
    }
  },
  {
    "scene_id": "avn_hr_000074",
    "title": "Rehearsing a video script",
    "summary": "A request-like line is part of a rehearsal.",
    "guide": "Watch the recording as a performance context. This reviewed scene has no valid demand; its scenario category is scripted reading and rehearsal.",
    "negative_explanation": "The scene is reviewed as no demand. Its scenario metadata identifies the speech as scripted reading and rehearsal, so the request-like wording belongs to the performance.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "negative",
    "axes": [
      {
        "axis": "axis1",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis2",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis3",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis4",
        "code": "4.1",
        "name": "Clean Near-field Speech"
      },
      {
        "axis": "axis5",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis6",
        "code": "6.12",
        "name": "Creative Work and Content Production"
      }
    ],
    "taxonomy_axes": [],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avn_hr_000074__clip_v1.mp4",
        "duration": 15.324,
        "replies": [],
        "poster": "media/avn_hr_000074.jpg"
      }
    ],
    "poster": "media/avn_hr_000074.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 12,
      "axis": null,
      "original_scene_id": "scene_7_neg"
    }
  },
  {
    "scene_id": "avn_hr_000002",
    "title": "A cooking question on someone else's call",
    "summary": "The audible request belongs to a nearby person's conversation.",
    "guide": "Distinguish the device user from the other speaker. The reviewed no-demand scenario attributes the cooking questions to a nearby person's phone conversation.",
    "negative_explanation": "The scene is reviewed as no demand. The scenario identifies a third party's phone conversation as the source of the request-like speech.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "negative",
    "axes": [
      {
        "axis": "axis1",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis2",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis3",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis4",
        "code": "4.1",
        "name": "Clean Near-field Speech"
      },
      {
        "axis": "axis5",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis6",
        "code": "6.2",
        "name": "Cooking and Dining"
      }
    ],
    "taxonomy_axes": [],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avn_hr_000002__clip_v1.mp4",
        "duration": 9.716667,
        "replies": [],
        "poster": "media/avn_hr_000002.jpg"
      }
    ],
    "poster": "media/avn_hr_000002.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 13,
      "axis": null,
      "original_scene_id": "scene_103_neg"
    }
  },
  {
    "scene_id": "avn_hr_000004",
    "title": "Sorting old photos together",
    "summary": "Two people discuss which photographs to scan.",
    "guide": "Consider whom the speaker is addressing. The reviewed scenario concerns a conversation between the people sorting photographs, with no request directed to the assistant.",
    "negative_explanation": "The scene is reviewed as no demand. Its scenario category is communication between people who are present together; the discussion about scanning photos is addressed to the other person.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "negative",
    "axes": [
      {
        "axis": "axis1",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis2",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis3",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis4",
        "code": "4.4",
        "name": "Low-volume or Whispered Speech"
      },
      {
        "axis": "axis5",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis6",
        "code": "6.1",
        "name": "Home and Daily Life"
      }
    ],
    "taxonomy_axes": [],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avn_hr_000004__clip_v1.mp4",
        "duration": 10.563,
        "replies": [],
        "poster": "media/avn_hr_000004.jpg"
      }
    ],
    "poster": "media/avn_hr_000004.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 14,
      "axis": null,
      "original_scene_id": "scene_120_neg"
    }
  },
  {
    "scene_id": "avn_hr_000001",
    "title": "Deciding to wait before booking",
    "summary": "A travel decision ends with postponing the purchase.",
    "guide": "Follow the decision through to its conclusion. The reviewed scenario describes reconsidering a ticket purchase while waiting for a visa, leaving no active request for the assistant.",
    "negative_explanation": "The scene is reviewed as no demand. Its scenario category is a change of intent after reconsidering priorities, ending with a decision to postpone the purchase.",
    "language": "zh",
    "modality": "audio-visual",
    "source": "human-recorded",
    "label": "negative",
    "axes": [
      {
        "axis": "axis1",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis2",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis3",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis4",
        "code": "4.1",
        "name": "Clean Near-field Speech"
      },
      {
        "axis": "axis5",
        "code": "",
        "name": "Not assigned"
      },
      {
        "axis": "axis6",
        "code": "6.4",
        "name": "Travel and Navigation"
      }
    ],
    "taxonomy_axes": [],
    "annotations": {
      "en": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      },
      "zh": {
        "evaluation_targets": {
          "has_demand": false,
          "segments": []
        }
      }
    },
    "clips": [
      {
        "id": "v1",
        "src": "media/avn_hr_000001__clip_v1.mp4",
        "duration": 16.392,
        "replies": [],
        "poster": "media/avn_hr_000001.jpg"
      }
    ],
    "poster": "media/avn_hr_000001.jpg",
    "negative_reason": "",
    "negative_signal": "",
    "recorded": {
      "order": 15,
      "axis": null,
      "original_scene_id": "scene_101_neg"
    }
  }
];
