import os
from flask import Flask, request, redirect, url_for

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'

@app.route('/', methods=['GET', 'POST'])
def upload_mp3():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'mp3_file' not in request.files:
            return 'No file selected.'
        mp3_file = request.files['mp3_file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if mp3_file.filename == '':
            return 'No file selected.'
        # check file extension
        if mp3_file.filename.split('.')[-1].lower() != 'mp3':
            return 'Invalid file extension. Only MP3 files are allowed.'
        # save the file
        mp3_file.save(os.path.join(app.config['UPLOAD_FOLDER'], mp3_file.filename))
        # return success message with link to uploaded file
        return f'File uploaded successfully. You can download it <a href="{url_for("download_file", filename=mp3_file.filename)}">here</a>.'
    return '''
    <!doctype html>
    <html>
    <body>
        <h1>Upload MP3 file</h1>
        <form method=post enctype=multipart/form-data>
            <input type=file name=mp3_file>
            <input type=submit value=Upload>
        </form>
    </body>
    </html>
    '''

@app.route('/uploads/<filename>')
def download_file(filename):
    return redirect(url_for('static', filename=os.path.join(app.config['UPLOAD_FOLDER'], filename)), code=301)

if __name__ == '__main__':
    app.run(debug=True)
