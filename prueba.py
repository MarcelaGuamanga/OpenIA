import openai
import json

openai.api_key = 'clave'

with open('data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Access user stories
user_stories = data['historias_de_usuario']

# Access programmer profiles
programmer_profiles = data['perfiles_de_programadores']

# Define prompt
prompt = "Dada una lista de historias de usuario y otra lista de perfiles de programadores como la siguiente:\n\n"

# Add user stories to prompt
prompt += "Historias de usuario:\n"
for story in user_stories:
    prompt += "- " + story + "\n"

# Add programmer profiles to prompt
prompt += "\nPerfiles de programadores:\n"
for profile in programmer_profiles:
    prompt += "- " + profile["nombre"] + " programador " + profile["tipo"] + " con experiencia de " + profile["experiencia"] + " y habilidades en " + ", ".join(profile["habilidades"]) + " y lenguajes de programación en " + ", ".join(profile.get("lenguajes de programacion", [])) + "\n"

#Add question to prompt
prompt += "\nEscoge el mejor programador candidato para implementar cada historia de usuario."

print(prompt)

# search_model = f"text-davinci-003"
response = openai.Completion.create(
    prompt=prompt,
    max_tokens=1024,
    n=1,
    stop=None,
    temperature=0.7,
    model="text-davinci-003",
)
print(f"The response: {response}")

best_match = response.choices[0].text
# best_match = response.choices[0].text.strip()
print(f"The best match is: {best_match}")
