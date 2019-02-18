from flask import abort, Flask, jsonify, request
from flair.models import TextClassifier
from flair.data import Sentence
 
app = Flask(__name__)
 
classifier = TextClassifier.load('en-sentiment')
 
def convertToRGB(value,score):
    if ( value == "POSITIVE"):
        return ( '{:02x}{:02x}{:02x}'.format(int(255 - 255*score),255,0) )
    return ( '{:02x}{:02x}{:02x}'.format(255, hex(int(255 - 255*score)),0) )

@app.route('/api/v1/analyzeSentiment', methods=['POST'])
def analyzeSentiment():
    if not request.json or not 'message' in request.json:
        abort(400)
    message = request.json['message']
    sentence = Sentence(message)
    classifier.predict(sentence)
    print('Sentence sentiment: ', sentence.labels)
    label = sentence.labels[0]
    #response = {'result': label.value, 'polarity':label.score}
    response = convertToRGB( label.value, label.score )
    return jsonify(response), 200
 
if __name__ == "__main__":
    app.run()