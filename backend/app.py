from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

notebooks = [{
    'id': 1,
    'title': 'Notebook 1',
    'author': 'Author 1',
    'year': 2021,
    'description': 'Description 1'
}, {
    'id': 2,
    'title': 'Notebook 2',
    'author': 'Author 2',
    'year': 2022,
    'description': 'Description 2'
}]
current_id = 3

@app.route('/notebooks', methods=['GET'])
def get_notebooks():
    return jsonify(notebooks)

@app.route('/notebooks', methods=['POST'])
def create_notebook():
    global current_id
    data = request.json
    notebook = {
        'id': current_id,
        'title': data.get('title'),
        'author': data.get('author'),
        'year': data.get('year'),
        'description': data.get('description')
    }
    notebooks.append(notebook)
    current_id += 1
    return jsonify(notebook)

@app.route('/notebooks/<int:id>', methods=['PUT'])
def update_notebook(id):
    data = request.json
    for notebook in notebooks:
        if notebook['id'] == id:
            notebook.update(data)
            return jsonify(notebook)
    return {'error': 'Not found'}, 404

@app.route('/notebooks/<int:id>', methods=['DELETE'])
def delete_notebook(id):
    global notebooks
    notebooks = [n for n in notebooks if n['id'] != id]
    return {'message': 'Deleted'}

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)