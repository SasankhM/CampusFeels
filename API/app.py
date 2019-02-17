    #!/usr/bin/env python
import string
from textblob import TextBlob
import os
#from textblob.sentiments import NaiveBayesAnalyzer
#from nltk.sentiment.vader import SentimentIntensityAnalyzer
from flask import Flask, jsonify, abort, request, make_response, url_for, redirect

#port = int(os.environ.get('PORT', 5000))

#import nltk
#nltk.downloader.download('vader_lexicon')

DEBUG = False
exclude_char = set(string.punctuation)

app = Flask(__name__, static_url_path = "")


def convertToRGB(value,score):
    if ( value == "pos"):
        return ( '#{:02x}{:02x}{:02x}'.format((int(255 - 255*score)),255,0) )
    return ( '#{:02x}{:02x}{:02x}'.format(255, (int(255 - 255*score)),0) )

# to lower case + remove punctuation + remove long spaces + trim
def clean_data(str):
    txt = str.lower()
    txt = ''.join(ch for ch in txt if ch not in exclude_char)
    return txt.replace('  ',' ').strip()

@app.route('/', methods = ['POST'])
def get_sentiment_textblob():
    data = clean_data(request.data.decode("utf-8"))
    polarity, subjectivity = TextBlob(data).sentiment
    classification = 'neu'
    if subjectivity > 0:
        if polarity > 0:
            classification = 'pos'
        if polarity < 0:
            classification = 'neg'
    return jsonify( {"text" : convertToRGB(classification, abs(polarity)) } ), 200    
    #return jsonify( { 'classification': classification,'polarity': polarity, 'subjectivity': subjectivity } ), 200     

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
