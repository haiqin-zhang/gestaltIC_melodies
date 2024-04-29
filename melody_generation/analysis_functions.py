import numpy as np
import pandas as pd
import pickle
import matplotlib.pyplot as plt
import re

#----------------------------------------------ORGANIZATION FUNCTIONS------------------------------------------------

#organizes the artificial grammar (which is initially defined as a dictionary) into a pd.DataFrame
#matrix: a dictionary
def organize_matrix(matrix):
  matrix = pd.DataFrame(matrix, index = matrix.keys())
  return matrix

#organizes the list of melody so that it's easier to count occurrences
#corpus: a 2-d list of melodies generated in markov_melody
def cleanup_corpus(corpus):
  for item in corpus:
    while len(item) < 40:
      item.append('0')

  a = np.array(corpus)
  a = a.flatten()
  a = [i for i in a if i != '0']

  return a

#IC calculator takes  a corpus (ie a list of generated melodies) and calculates IC of each note
  #doesn't take the context into account - use IC_context for that
  #clean up corpus with cleanup_corpus before using the calculator
#corpus: a 1-D list of melodies generated with markov_melody and processed using cleanup_corpus; all melodies in the set are concatenated 
#returns an dictionary with the IC of each note used, IC = -log2(p)
def IC(corpus):

  unique, counts = np.unique(corpus, return_counts=True)
  occurrences = dict(zip(unique, counts))
  total = sum(occurrences.values())
  IC_dict = {key: -np.log2(value/total) for key, value in occurrences.items()}

  df = pd.DataFrame.from_dict(IC_dict, orient = 'index', columns=[ 'Probs'])
  df.sort_index()

  return df

#IC_context calculates the probability of a note n given the previous context note c. It should resemble the artificial grammar map.
#corpus: a 1-D list of melodies generated by markov_melody and processed with cleanup_corpus
#returns dictionary where keys are the context, note; values are probabilities of note given context
def IC_context_prob(corpus):

  pairs = list(zip(corpus, corpus[1:])) #puts everything into consecutive pairs
  pairs = [''.join(item) for item in pairs]
  unique, counts = np.unique(pairs, return_counts=True)
  occurrences_pairs = dict(zip(unique, counts))

  context_prob = []
  for notepair in pairs:
  
    p_nc = occurrences_pairs[notepair]
    unique, counts = np.unique(corpus, return_counts=True)
    occurrences_notes = dict(zip(unique, counts))

    if notepair[1] == '#' or notepair[1] =='b':
      p_c = occurrences_notes[notepair[:3]]
    else:
      p_c = occurrences_notes[notepair[:2]]


    p_ngivenc = p_nc / p_c 
    context_prob.append(p_ngivenc)


  prob = dict(zip(pairs,context_prob))
  #print(prob)
  df = pd.DataFrame.from_dict(prob, orient = 'index', columns=['Transition probs'])
  sorted_df = df.sort_index()

  return sorted_df

#IC_context extends IC_context_prob by calculating the IC of a note in a given context: -log2(p(n|c))
def IC_context(corpus):
  IC = IC_context_prob(corpus)
  #print(IC)
  for item in IC.index:
    #print(IC['Transition probs'][item])
    IC['Transition probs'][item] = -np.log2(IC['Transition probs'][item])

  sorted_IC = IC.sort_index()
  return sorted_IC



"""
The three functions below calculate experimental transition probabilities
corpus_to_string: takes the cleaned up melody corpus (output of cleanup_corpus) and returns a string with spaces and commas removed
calc_pitch_freqs: takes the melody matrix and returns dictionary with no. of occurrences of each note in corpus
calc_trans_probs: 
  requires calc_pitch_freqs and corpus_to_string
  returns dictionary with trans probs, like the theoretical matrix
"""

def corpus_to_string(corpus):
    melody_string = str(corpus)
    melody_string = melody_string.replace(",", "")
    melody_string = re.sub(',', '', melody_string)
    melody_string = melody_string.replace(" ","")
    return melody_string

def calc_pitch_freqs(pitchset,corpus):
    pitches = pitchset
    pitch_freqs = {}
    for item in pitches: 
        pitch_freqs[item] = corpus.count(item)   
    return pitch_freqs

def calc_trans_probs(pitchset, corpus): #usually matrix: current_matrix; corpus: melody_corpus
    melody_string = corpus_to_string(corpus)
    pitch_freqs = calc_pitch_freqs(pitchset, corpus)
    transition_probs = {}
    for context in pitch_freqs.keys():
        next_note_probs = []
        for note in pitch_freqs:
            pattern = str("'"+context+"''"+note+"'")
            prob = len(re.findall(pattern, melody_string))/pitch_freqs[context]
            next_note_probs.append(prob)
        transition_probs[context] = next_note_probs

    transition_probs = organize_matrix(transition_probs)
    transition_probs = transition_probs.transpose()
    return(transition_probs)
  

def calc_trans_probs_sequence(corpus): #usually matrix: current_matrix; corpus: melody_corpus
    degrees = [1,2,3,4,5,6,7]
    sequence_string = str(corpus)
    pitch_freqs = calc_pitch_freqs(degrees, corpus)
    transition_probs = {}

    for context in pitch_freqs.keys():
        next_note_probs = []
        for note in pitch_freqs:
            pattern = str(str(context)+", "+str(note))
            prob = len(re.findall(pattern, sequence_string))/pitch_freqs[context]
            next_note_probs.append(prob)
        transition_probs[context] = next_note_probs

    transition_probs = organize_matrix(transition_probs)
    transition_probs = transition_probs.transpose()
    return(transition_probs)

def calc_IC(pitchset, corpus): #usually matrix: current_matrix; corpus: melody_corpus
    melody_string = corpus_to_string(corpus)
    print(melody_string)
    pitch_freqs = calc_pitch_freqs(pitchset, corpus)
    IC = {}
    for context in pitch_freqs.keys():
        next_note_probs = []
        for note in pitch_freqs:
            pattern = str("'"+context+"''"+note+"'")
            prob = len(re.findall(pattern, melody_string))/pitch_freqs[context]
            next_note_probs.append(prob)
        next_note_IC = [-np.log2(x) for x in next_note_probs]
        IC[context] = next_note_IC

    IC = organize_matrix(IC)
    IC = IC.transpose()
    return(IC)

def calc_IC_sequence(corpus): #usually matrix: current_matrix; corpus: melody_corpus
    degrees = [1,2,3,4,5,6,7]
    sequence_string = str(corpus)
    pitch_freqs = calc_pitch_freqs(degrees, corpus)
    IC = {}

    for context in pitch_freqs.keys():
        next_note_probs = []
        for note in pitch_freqs:
            pattern = str(str(context)+", "+str(note))
            prob = len(re.findall(pattern, sequence_string))/pitch_freqs[context]
            next_note_probs.append(prob)
        next_note_IC = [-np.log2(x) for x in next_note_probs]
        IC[context] = next_note_IC

    IC = organize_matrix(IC)
    IC = IC.transpose()
    return(IC)

#------------------------------------------FUNCTIONS FOR MAKING FIGURES--------------------------------------------------------

"""
target_finder finds the positions of target notes in melody
  i.e. is the target always the 2nd note of the melody? What is the distribution?
melody_list: set of melodies generated by markov_melody
target, context: strings 
returns: list of target positions (also makes histograms of the distributions)
N.B.: currently looks at the raw frequency of which each target is found in a position, so it's not normalized
"""
def target_finder(melody_list, target, context):
    target_positions = []
    for test_melody in melody_list:
        for i in range(len(test_melody)): 
            if test_melody[i] == target and test_melody[i-1] == context:        
                target_positions.append(i)
    plt.figure()
    plt.hist(target_positions, bins = np.linspace(0,10,11), label = str(target)+'|'+str(context))
    plt.xlabel('Position of target in melody')
    plt.ylabel('Frequency')
    plt.legend()

    return target_positions

#plots heatmap of transition matrix
def plot_matrix(matrix, title):
 # ticks = [0,1,2,3,4,5]
  ticks = [0,1,2,3,4,5,6]
  labels = [x+1 for x in ticks]
  plt.figure(figsize = (7,7))
  plt.imshow(matrix)
  plt.xticks(ticks, list(matrix.index))
  plt.yticks(ticks, list(matrix.index))
  plt.xlabel('Note')
  plt.ylabel('Context')
  plt.title(title)
  plt.colorbar()


#plots lengths of melodies or melody fragments
def length_plot(corpus, title = "Lengths of generated melodies"):
    lengths = []
    for item in corpus:
        lengths.append(len(item))
      
    lengths.sort()

    plt.figure()
    bins = np.arange(lengths[0]-1, lengths[-1]+3) - 0.5
    plt.hist(lengths, bins, edgecolor = 'black')
    plt.xticks(range(lengths[0]-1,lengths[-1]+3))
    plt.xlabel('Number of notes in melody')
    plt.ylabel("Frequency")
    plt.title(title)