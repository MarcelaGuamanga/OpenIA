from flask import Flask, render_template, request
from flask_cors import CORS
import json
import openai

# Configure OpenAI API key
openai.api_key = "clave"

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Define routes
@app.route("/process", methods=["POST"])
def process():
    # Get JSON data
    data = request.json

    # Access user stories
    user_stories = data['user_stories']

    # Access programmer profiles
    programmer_profiles = data['programmer_profiles']

    # Define prompt
    prompt = "Dada una lista de historias de usuario y otra lista de perfiles de programadores como la siguiente:\n\n"

    # Add user stories to prompt
    prompt += "Historias de usuario:\n"
    for story in user_stories:
        prompt += "- " + story + "\n"

    # Add programmer profiles to prompt
    prompt += "\nPerfiles de programadores:\n"
    for profile in programmer_profiles:
        yearsExperience = str(profile["experience"])
        prompt += "- " + profile["name"] + " programador " + profile["type"] + " con experiencia de " + yearsExperience + "años y habilidades en " + ", ".join(profile["skills"]) + " y lenguajes de programación en " + ", ".join(profile["programmingLanguages"]) + "\n"

    #Add question to prompt
    prompt += "\nEscoge el mejor programador candidato para implementar cada historia de usuario. Output en formato json: json con una lista de objetos donde cada objeto tiene una clave programador con valor el nombre del programador y una clave historia_usuario con valor la historia de usuario"

    print("prompt que se le va a enviar a la OpenIA\n",prompt)
    # search_model = f"text-davinci-003"
    response = openai.Completion.create(
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0,
        model="text-davinci-003",
    )

    best_match = response.choices[0].text
    print("respuesta IA", best_match)
    json_object = json.loads(best_match[1:])
    print("respuesta IA json", json_object)
    # Response Open IA
    return json_object

if __name__ == "__main__":
    app.run(debug=True)