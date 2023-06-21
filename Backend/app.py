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
        prompt += "- " + profile["name"] + " programador " + profile["type"] + " con experiencia de " + yearsExperience + " años y habilidades en " + ", ".join(profile["skills"]) + " y lenguajes de programación en " + ", ".join(profile["programmingLanguages"]) + "\n"

    #Add question to prompt
    prompt += "\nEscoge el mejor programador candidato de acuerdo a su perfil para implementar cada historia de usuario.Forma tu respuesta como una lista de objetos json con las siguientes claves: La primera clave sera historia_usuario con valor numero historia de usuario, la segunda clave programadores_compatibilidad tendra como valor un parrafo con los nombres de los programadores con su porcentaje de compatibilidad frente a la historia de usuario, los porcentajes deben variar teniendo en cuenta años de experiencia y habilidades de cada programador, y la tercera clave programador_elegido tendra como valor el nombre del programador elegido, tenga en cuenta si al programador ya le ha asignado una historia de usuario.Haz tu respuesta lo mas corta posible"

    print("prompt que se le va a enviar a la OpenIA\n",prompt)
    response = connectionOpenIA(prompt)

    best_match = response.choices[0].text

    print("best_match", best_match)
    print("respuesta IA",best_match[1:])

    json_object = json.loads(best_match[1:])
    
    return json_object

def connectionOpenIA(message:str):
    responseOpenIA = openai.Completion.create(
        prompt=message,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0,
        model="text-davinci-003",
    )
    return responseOpenIA

if __name__ == "__main__":
    app.run(debug=True)