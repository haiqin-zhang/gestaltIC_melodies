 //------------------------------------INITIALIZING EXPERIMENT PARAMETERS-------------------------------
//    Make sure these parameters are correct before running 
  //############################################
  var condition_assignment = 'tonic G4' //in case we decide to use different grammars in the future
  current_mode = 'real' //or 'real' --> changes number of trials and whether you can skip trials
  //############################################

  const jsPsych = initJsPsych({
    on_finish: function() { 
      //TO CHANGE don't show csv in the real experiment
      //jsPsych.data.displayData('csv');
    }
  });

  // generate a random subject ID with 6 characters
  var subject_id = jsPsych.randomization.randomID(6);

  // record the condition assignment in the jsPsych data
  // this adds a property called 'subject' and a property called 'condition' to every trial
  jsPsych.data.addProperties({
    subject: subject_id,
    condition: condition_assignment
  });

  var timeline = [];

  if (current_mode == 'test'){
    skip = true
    n_exposure_trials = 5
  }
  else if (current_mode == 'real'){
    skip = false
    n_exposure_trials = 60
  }
  //------------------------------STIMULI LIST----------------------------------------------


var exposure_noresponse_stimuli = [
  "exposure_4s_1.mp3",
  "exposure_4s_2.mp3",
  "exposure_4s_3.mp3",
  "exposure_4s_4.mp3",
  "exposure_4s_5.mp3",
  "exposure_4s_6.mp3",
  "exposure_4s_7.mp3",
  "exposure_4s_8.mp3",
  "exposure_4s_9.mp3",
  "exposure_4s_10.mp3",
  "exposure_4s_11.mp3",
  "exposure_4s_12.mp3",
  "exposure_4s_13.mp3",
  "exposure_4s_14.mp3",
  "exposure_4s_15.mp3",
  "exposure_4s_16.mp3",
  "exposure_4s_17.mp3",
  "exposure_4s_18.mp3",
  "exposure_4s_19.mp3",
  "exposure_4s_20.mp3",
  "exposure_4s_21.mp3",
  "exposure_4s_22.mp3",
  "exposure_4s_23.mp3",
  "exposure_4s_24.mp3",
  "exposure_4s_25.mp3",
  "exposure_4s_26.mp3",
  "exposure_4s_27.mp3",
  "exposure_4s_28.mp3",
  "exposure_4s_29.mp3",
  "exposure_4s_30.mp3",
  "exposure_4s_31.mp3",
  "exposure_4s_32.mp3",
  "exposure_4s_33.mp3",
  "exposure_4s_34.mp3",
  "exposure_4s_35.mp3",
  "exposure_4s_36.mp3",
  "exposure_4s_37.mp3",
  "exposure_4s_38.mp3",
  "exposure_4s_39.mp3",
  "exposure_4s_40.mp3",
  "exposure_4s_41.mp3",
  "exposure_4s_42.mp3",
  "exposure_4s_43.mp3",
  "exposure_4s_44.mp3",
  "exposure_4s_45.mp3",
  ];

var exposure_response_stimuli = [
  "grammatical_1.mp3",
  "grammatical_2.mp3",
  "grammatical_3.mp3",
  "grammatical_4.mp3",
  "grammatical_5.mp3", 
  "grammatical_6.mp3",
  "grammatical_7.mp3",
  "grammatical_8.mp3",
];

var grammar_learning_stimuli = [
  {stimulus: "grammatical_1.mp3"},
  {stimulus: "grammatical_2.mp3"},
  {stimulus: "grammatical_3.mp3"},
  {stimulus: "grammatical_4.mp3"},
  {stimulus: "grammatical_5.mp3"}, 
  {stimulus: "grammatical_6.mp3"},
  {stimulus: "grammatical_7.mp3"},
  {stimulus: "grammatical_8.mp3"},

  {stimulus: "agrammatical_1.mp3"},
  {stimulus: "agrammatical_2.mp3"},
  {stimulus: "agrammatical_3.mp3"},
  {stimulus: "agrammatical_4.mp3"},
  {stimulus: "agrammatical_5.mp3"}, 
  {stimulus: "agrammatical_6.mp3"},
  {stimulus: "agrammatical_7.mp3"},
  {stimulus: "agrammatical_8.mp3"},

];

var fc_stimuli = [
  {stimulus: "fc_IC_accent_3_1.mp3", high_IC: 'f', accent: 'NA'},
  {stimulus: "fc_IC_accent_3_2.mp3", high_IC: 'f', accent: 'NA'},
  {stimulus: "fc_IC_accent_3_3.mp3", high_IC: 'f', accent: 'NA'},
  {stimulus: "fc_IC_accent_3_4.mp3", high_IC: 'f', accent: 'NA'},
  
  {stimulus: "fc_IC_accent_5_1.mp3", high_IC: 'j', accent: 'NA'},
  {stimulus: "fc_IC_accent_5_2.mp3", high_IC: 'j', accent: 'NA'},
  {stimulus: "fc_IC_accent_5_3.mp3", high_IC: 'j', accent: 'NA'},
  {stimulus: "fc_IC_accent_5_4.mp3", high_IC: 'j', accent: 'NA'},

  {stimulus: "fc_IC_default_3_1.mp3", high_IC: 'f', accent: 'NA'},
  {stimulus: "fc_IC_default_3_2.mp3", high_IC: 'f', accent: 'NA'},
  {stimulus: "fc_IC_default_3_3.mp3", high_IC: 'f', accent: 'NA'},
  {stimulus: "fc_IC_default_3_4.mp3", high_IC: 'f', accent: 'NA'},

  {stimulus: "fc_IC_default_5_1.mp3", high_IC: 'j', accent: 'NA'},
  {stimulus: "fc_IC_default_5_2.mp3", high_IC: 'j', accent: 'NA'},
  {stimulus: "fc_IC_default_5_3.mp3", high_IC: 'j', accent: 'NA'},
  {stimulus: "fc_IC_default_5_4.mp3", high_IC: 'j', accent: 'NA'},

  {stimulus: "fc_accents_32_1.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_32_2.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_32_3.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_32_4.mp3", high_IC: 'NA', accent: 'j'},

  {stimulus: "fc_accents_34_1.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_34_2.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_34_3.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_34_4.mp3", high_IC: 'NA', accent: 'j'},

  {stimulus: "fc_accents_54_1.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_54_2.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_54_3.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_54_4.mp3", high_IC: 'NA', accent: 'j'},

  {stimulus: "fc_accents_56_1.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_56_2.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_56_3.mp3", high_IC: 'NA', accent: 'j'},
  {stimulus: "fc_accents_56_4.mp3", high_IC: 'NA', accent: 'j'},
];
  //-----------------------------WELCOME AND INSTRUCTIONS----------------------------------------------

  var welcome_1 = {
    type: jsPsychSurveyHtmlForm, 
    preamble: `<p align = 'justify', width = 300 px><b>Welcome! Please read the following instructions carefully.</b></p>
    
    <p align = 'justify'>You will asked to listen to a series of melodies and answer some questions about what you hear. We will 
      also collect demographic information about you and your musical background. 
      Your participation is voluntary and you can exit the experiment at any time (however, 
      <b>you need to complete the experiment to receive compensation</b>). 
      The data collected is completely anonymous. By clicking continue, you provide your consent to participate.</p>`,
    html: `<p> Enter your Prolific ID if you have one: <input name="prolific_id" type="text" /></p> `
  };


  var welcome_2 = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `
    <p>Please complete the experiment in a quiet place.
      We highly recommend using headphones.</p>

    </p align = 'justify'> <b>Press the space bar to proceed.</b> </p>`,
    choices: [' ']
  };

  var welcome_3 = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `
    <p>A series of soundchecks will now be played to help you adjust the volume
      to a comfortable level. </p>

    </p align = 'justify'> <b>Press the space bar to proceed.</b> </p>`,
    choices: [' ']
  };

  timeline.push(welcome_1, welcome_2, welcome_3)

  var soundcheck = {
    type: jsPsychAudioButtonResponse,
    stimulus: "grammatical_1.mp3",
    prompt: `<p>      
    Please make sure that you can hear the melody clearly. You can replay the melody as many times as you need.</p>`,
    choices: ['Replay sound', 'Next']
  };

  var soundcheck_loop = {
    timeline: [soundcheck],
    loop_function: function(){
      // get the data from the previous trial,
      // and check which key was pressed
      var data = jsPsych.data.get().last(1).values()[0];
      if(data.response == '0'){
          return true;
      } else {
          return false;
      }
    }
  }
  timeline.push(soundcheck_loop)

  var soundcheck_accent_instructions_1 = {
    type:jsPsychHtmlKeyboardResponse,
    stimulus: `<p width = 300 px>
    You will now hear two melodies in succession. 
    The notes in each melody are the same, but there is an accent on one note for one of the melodies. 
    <b>Listen for which melody has the accent.</b>
    </p>
    
    Press the space bar to continue.`,    
    choices: [' ']
  }

    var soundcheck_accent_instructions_2 = {
    type:jsPsychHtmlKeyboardResponse,
    stimulus: `<p width = 300 px>
    <b>You must score at least 2/3 to proceed with the experiment.</b>
    </p>
    
    Press the space bar to continue.`,    
    choices: [' ']
  }
  timeline.push(soundcheck_accent_instructions_1, soundcheck_accent_instructions_2)

  var volumetest_1 = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'fc_accents_32_1.mp3',
    prompt: `In which melody is there an <b>accented</b> note?
    <p>Test 1/3</p>`,
    choices: ['1st', '2nd'],
    data: {
      task: 'soundcheck'
    },
    on_finish: function(data){
        if (data.response == '1'){
          data.correct = true;
        } else {
          data.correct = false;
        }
      }
  }

  var volumetest_2 = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'fc_accents_56_4.mp3',
    prompt: `In which melody is there an <b>accented</b> note?
    <p>Test 2/3</p>`,
    choices: ['1st', '2nd'],
    data: {
      task: 'soundcheck'
    },
    on_finish: function(data){
        if (data.response == '1'){
          data.correct = true;
        } else {
          data.correct = false;
        }
    }
  }
 
  var volumetest_3 = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'fc_accents_54_4.mp3',
    prompt: `In which melody is there an <b>accented</b> note?
    <p>Test 3/3</p>`,
    choices: ['1st', '2nd'],
    data: {
      task: 'soundcheck'
    },
    on_finish: function(data){
        if (data.response == '1'){
          data.correct = true;
        } else {
          data.correct = false;
        }
    }
  }

  var feedback = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
      var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
      if(last_trial_correct){
        return "<p>Correct!</p> Press the space bar to continue."; 
      } else {
        return "<p>Incorrect.</p> Press the space bar to continue."; 
      }
    },
    choices: [' ']
  }

  timeline.push(volumetest_1, feedback, volumetest_2, feedback, volumetest_3, feedback)

  var soundcheck_filter = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `If you got <b>less than 2/3</b> of the previous soundcheck questions correct, <b>we unfortunately cannot use your data or pay you</b>. Please exit the experiment now.
    
    <p>If you got <b>more than 2/3</b> correct, press the space bar to continue</p>.`
  }

  timeline.push(soundcheck_filter)


//-----------------------------------PART 1: EXPOSURE PHASE-----------------------------------------------------
 //----------------------------instructions and demo--------------------------
  var instructions_exposure_1 = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `<p>Please listen carefully to the following set of melodies. 
      You will occassionally be asked some basic questions about some of the melodies to check your attention level. </p>
    <p><b>Press the space bar to continue.</b></p>`,
    choices: [' '],
  };

    var instructions_exposure_2 = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `<p>The attention questions vary in difficulty, but you must get at least some questions correct for us to pay you.</p>
    <p><b>Press the space bar to continue.</b></p>`,
    choices: [' '],
  };

  var instructions_exposure_3 = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `
    This part of the experiment should take <b>15-20 minutes</b>. 
    <p><b>Press the space bar to begin.</b></p>`,
    choices: [' '],
  };
  timeline.push(instructions_exposure_1,  instructions_exposure_2, instructions_exposure_3)

      //---------------exposure phase actually begins here--------------------------

  var exposure_noresponse = {
      type: jsPsychAudioKeyboardResponse,
      prompt: `Please listen...`,
      //TO CHANGE
      trial_duration: 23000, 
        response_ends_trial: skip,
      
      stimulus: function(){
        var melody = jsPsych.randomization.sampleWithReplacement(exposure_noresponse_stimuli, 1)
        return melody
      },
      data: {
        task: 'exposure',
        subtask: 'exp_noresponse'
      },
      choices: [' ']
  };

  var exposure_response = {
    type: jsPsychAudioSliderResponse,
    prompt: 'How pleasant do you find this melody?',
    labels: [`Not pleasant at all`, 'Very pleasant'],
    min: 1, 
    max: 7,
    step: 1,
    slider_start: 4,
    response_ends_trial: true,
    stimulus: function(){
      var melody = jsPsych.randomization.sampleWithReplacement(exposure_response_stimuli, 1)
      return melody
    },
    data: {
      task: 'exposure',
      subtask: 'exp_liking'
    }
};

  var exposure_attncheck_easy = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'attn_length_easy_1.mp3',
    prompt: 'Which of these two melodies is longer?',
    choices: ['1st', '2nd'],
    data: {
      task: 'exposure',
      subtask: 'attncheck'
    },
    on_finish: function(data){
        if (data.response == '1'){
          data.correct = true;
        } else {
          data.correct = false;
        }
    }
  }

  var exposure_attncheck_int = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'attn_length_int_1.mp3',
    prompt: 'Which of these two melodies is longer?',
    choices: ['1st', '2nd'],
    data: {
      task: 'exposure',
      subtask: 'attncheck'
    },
    on_finish: function(data){
        if (data.response == '1'){
          data.correct = true;
        } else {
          data.correct = false;
        }
    }
  }

  var exposure_attncheck_hard = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'attn_length_hard_1.mp3',
    prompt: 'Which of these two melodies is longer?',
    choices: ['1st', '2nd'],
    data: {
      task: 'exposure',
      subtask: 'attncheck'
    },
    on_finish: function(data){
        if (data.response == '1'){
          data.correct = true;
        } else {
          data.correct = false;
        }
    }
  }

  var exposure_procedure = {
    //TO CHANGE
    //specifies the number of trials to randomly make

    //5 trials 
    timeline: jsPsych.randomization.sampleWithReplacement([exposure_noresponse, exposure_response, exposure_attncheck_easy, exposure_attncheck_int, exposure_attncheck_hard], n_exposure_trials, [20, 1, 3, 1, 1]),
    
    //60 trials (real experiment)
    //timeline: jsPsych.randomization.sampleWithReplacement([exposure_noresponse, exposure_response, exposure_attncheck_easy, exposure_attncheck_int, exposure_attncheck_hard], 60, [20, 1, 3, 1, 1]),
    repetitions: 1, //increase number of repetitions in real experiment?
    randomize_order: true
  }
  timeline.push(exposure_procedure)

  //-------------------------------PART 1A: GRAMMAR LEARNING--------------------------------------
  var instructions_grammartest_1 = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `<p>You will now be asked to judge how similar some melodies are to what you have
    just listened to. </p>
    <p><b>Press the space bar to continue.</b></p>`,
    choices: [' '],
  };

  var instructions_grammartest_2 = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `<p>The changes in the melodies are subtle. If you are not sure, go with your gut feeling.</p>
    <p><b>Press the space bar to continue.</b></p>`,
    choices: [' '],
  };
  timeline.push(instructions_grammartest_1, instructions_grammartest_2)

  var grammar_trial = {
    type: jsPsychAudioSliderResponse,
    stimulus: jsPsych.timelineVariable('stimulus'),
    labels: [`Very different`, 'Very similar'],
    min: 1, 
    max: 7,
    step: 1,
    slider_start: 4,
    response_ends_trial: true,
    prompt: `<p>How similar is this melody to the others that you have listened to?</p>`,
    data: {
      task: 'grammar_learning'
    }
};

  var grammar_procedure = {
    timeline: [grammar_trial],
    timeline_variables: grammar_learning_stimuli,
    repetitions: 1,
    randomize_order: true 
  }
  timeline.push(grammar_procedure)

  var grammar_openquestion = {
    type: jsPsychSurveyHtmlForm, 
    preamble: ``,
    html: `<p> Please briefly describe the strategies you used (if any) to rate the similarity of
     the previous melodies: <input name="prolific_id" type="text" /></p> `
  };
  timeline.push(grammar_openquestion)

//-----------------------------------PART 2: FORCED CHOICE TEST------------------------------------

  var instructions_forcedchoice_1 = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `<p>In this part of the experiment, you will presented with two melodies in succession. 
    <p><b>Press the space bar to continue.</b></p>`,
    choices: [' ']
  };

  var instructions_forcedchoice_2 = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `<p>The melodies are nearly identical, but have either an added accent or one different note. </p>
    <p><b>Press the space bar to continue.</b></p>`,
    choices: [' ']
  };

  var instructions_forcedchoice_3 = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `<p>    Please choose the melody that <b>sounds better to you.</b></p>
    <p><b>Press the space bar to continue.</b></p>`,
    choices: [' ']
  };

  var instructions_forcedchoice_4 = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `There are <b>32 questions</b> in this section.`,
    choices: [' ']
  };
  timeline.push(instructions_forcedchoice_1, instructions_forcedchoice_2, instructions_forcedchoice_3, instructions_forcedchoice_4)

  var test_trial = {
      type: jsPsychAudioKeyboardResponse,
      stimulus: jsPsych.timelineVariable('stimulus'),
      
      prompt: `<p>Did you prefer the first melody or the second melody?</p>
      <div style='width: 700px;'>
      <div style='float: left;'>
      <p class='small'>1st melody: press <b>F</b></p></div>
      <div style='float: right;'>
      <p class='small'>2nd melody: press <b>J</b></p></div>
      </div>`,
      choices: ['f', 'j'],
      data: {
        accent: jsPsych.timelineVariable('accent'),
        high_IC: jsPsych.timelineVariable('high_IC'),
        task: 'forced_choice'
      },
      on_finish: function(data){
        data.accent_chosen = jsPsych.pluginAPI.compareKeys(data.response, data.accent);
        data.high_IC_chosen = jsPsych.pluginAPI.compareKeys(data.response, data.high_IC)
      }
  };

  var test_procedure = {
    timeline: [test_trial],
    timeline_variables: fc_stimuli,
    repetitions: 1,
    randomize_order: true 
  }
  timeline.push(test_procedure)

//---------------------------------DEMOGRAPHIC SURVEY-----------------------------------------
  var survey_intro = {
          type: jsPsychHtmlKeyboardResponse,
          stimulus: `<p>You have completed all the listening in this experiment. The remaining questions about your background
          will help us better understand your responses. You can skip any question that you do not wish to answer. </p>
          <p> <b> Press the space bar to continue. </b></p>`,
          choices: [' ']
      }
      timeline.push(survey_intro)

  var headphone_use = {
      type: jsPsychSurveyMultiChoice,
      questions: [
          {
              prompt: "Did you wear headphones or earbuds during the experiment?",
              name: "HeadphoneUse",
              options: ['Yes, I used headphones', 'Yes, I used earbuds', 'No, I used computer speakers']
          }
      ],
      data: {
        task: 'survey'
      }
  }
  timeline.push(headphone_use)

  var demographics_1 = {
      type: jsPsychSurveyHtmlForm,
      preamble: '<p>Some demographic information about you: </p>',
      html: `<p> What is your year of birth? <input name="age" type="text" /></p> 
      <p> Which country do you live in? <input name="country" type="text" /></p>
      <p> What is/are your native language(s)? <input name="language" type="text" /></p>`,
      data: {
        task: 'survey'
      }
    };    
  timeline.push(demographics_1)

  var demographics_2 = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: 'What is your gender?',
        name: 'Gender',
        options: ['Female', 'Male', 'Other']
      }
    ],
    data: {
      task: 'survey'
    }
  }
  timeline.push(demographics_2)

  var listening_genres = {
    type: jsPsychSurveyMultiSelect,
    questions: [{
        prompt: "Select up to 3 genres of music that you listen to most often:", 
        options: ["Pop", "Rock", "Blues", "Jazz", "Hip-hop", "Classical", "Electronic", "Country", "Metal", "Reggae", "Other non-Western music"], 
        horizontal: false,
        required: true,
        name: 'Colors'
      }]
  };
  timeline.push(listening_genres)

  var musical_ability_survey = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {
        prompt: 'Do you have a hearing impairment?',
        name: 'HearingImpairment',
        options: ['Yes', 'No', 'I\'m not sure']
      },
      {
        prompt: 'Do you have perfect pitch?',
        name: 'PerfectPitch',
        options: ['Yes', 'No', 'I\'m not sure'] // should maybe specify whether the perfect pitch is on own instrument or universals
      },
      {
        prompt: 'When you sing, can you tell whether you are in tune or off-key?',
        name: 'Singing',
        options: ['Yes', 'No', 'I\'m not sure']
      },      
    ],
    data: {
      task: 'survey'
    }
  }
  timeline.push(musical_ability_survey)

 
  var musical_background_survey = {
   type: jsPsychSurveyMultiChoice,
   questions: [
   {
      prompt: "On average, how much do you spend each day singing or practicing an instrument?", 
      name: 'PracticeHours', 
      options: ['None at all', 'Under 30 minutes', '30 minutes-1 hour', '1-2 hours', 'Over 2 hours'], 
  }, 

  {
      prompt: "How many years of formal musical training (private lessons) have you had?",
      name: 'TrainingYears', 
      options: ['None at all', 'Less than 1 year', '1-4 years', '5-7 years', '7-10 years', 'Over 10 years'], 
  },

  {
    prompt: "How would you describe your musical training?",
    name: 'TrainingType', 
    options: ['I taught myself', 'I took lessons with a private teacher', 'I did some studies at a specialized university or conservatory', 'I have a degree from a specialized university or conservatory'], 
  },

  {
    prompt: "How would you rate your musical expertise?",
    name: 'Expertise', 
    options: ['Beginner', 'Intermediate', 'Advanced', 'Professional'], 
  },

  {
      prompt: "Have you had any formal training in non-Western music? (e.g. sitar, pipa, erhu)",
      name: 'NonWesternTraining', 
      options: ['Yes', 'No'], 
  },
],
data: {
  task: 'survey'
  }
};
  timeline.push(musical_background_survey)

  var musical_background_followup = {//to do: add a conditional loop --> show this only to people who have musical training
   type: jsPsychSurveyMultiChoice, 
   questions: [
    {
        prompt: "How old were you when you started your musical training?",
        name: 'TrainingStart', 
        options: ['Under 5', '5-7', '7-10', '10-15', '15-18', '18+', 'I did not have any formal training']
    }
  ],
  data: {
    task: 'survey'
  }
};
timeline.push(musical_background_followup)

//---------------------------------DEBRIEF AND EXIT---------------------------------------------

  var finish_screen = { 
    type: jsPsychHtmlButtonResponse, //maybe change this to HTML button response?
    stimulus: `You have reached the end of the experiment. Your completion code is <b>C1AWH3EX</b>.
    <p>For questions or concerns, please write to <b>haiqin.zhang@ens.psl.eu.</b></p>
    Thank you for your participation!
  `,
  choices: ['Finish and exit']
    
  }
  timeline.push(finish_screen)


//--------------------------------RUN EXPERIMENT----------------------------------------------
  jsPsych.run(timeline);
