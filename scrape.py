import json
import requests

SITE_URL = 'https://pokeapi.co/api/v2/'
POKEMON_URL = SITE_URL + '/pokemon/'
TYPE_URL = SITE_URL + 'type/'
pokemon_dict = {}
pokemon_info = {}
type_dict = {}
type_weakness = {}
type_strength = {}

r = requests.get(TYPE_URL)
r = json.loads(r.content.decode('utf-8'))
for i, val in enumerate(r['results']):
    if i > 17:
        continue
    line = val['name']
    type_dict[i] = line
for types in type_dict.values():
    DAMAGE_URL = TYPE_URL + types + '/'
    q = requests.get(DAMAGE_URL)
    q = json.loads(q.content.decode('utf-8'))
    numofWeakness = len(q['damage_relations']['double_damage_from'])
    for i in range(numofWeakness):
        if i == 0: 
            value = q['damage_relations']['double_damage_from'][i]['name']
            type_weakness[types] = [value]
        else:
            value = q['damage_relations']['double_damage_from'][i]['name']
            type_weakness[types].append(value)
    
print({'weaknesses':type_weakness})

for types in type_dict.values():
    DAMAGE_URL = TYPE_URL + types + '/'
    q = requests.get(DAMAGE_URL)
    q = json.loads(q.content.decode('utf-8'))
    numofStrength = len(q['damage_relations']['double_damage_to'])
    for i in range(numofStrength):
        if i == 0: 
            value = q['damage_relations']['double_damage_to'][i]['name']
            type_strength[types] = [value]
        else:
            value = q['damage_relations']['double_damage_to'][i]['name']
            type_strength[types].append(value)
type_info = {'weaknesses':type_weakness, 'strengths':type_strength} 
# for value in q['damage_relations']['double_damage_from'][0]['name']:
    # print(value)
    # line = line.rstrip()
    # pokemon_dict[i] = line


# ['damage_relations']['double_damage_from'][0]['name']
# for pokemon in pokemon_dict.values():
#     r = requests.get(POKEMON_URL + str(pokemon))
#     r = json.loads(r.content.decode('utf-8'))
#     if r['types'][0]['slot'] == 2:
#         value = {r['types'][1]['type']['name'], r['types'][0]['type']['name']}
#     else:
#         value = r['types'][0]['type']['name']
#     pokemon_info[pokemon] = value

with open('type_weakness.json', 'w') as json_file:
    json.dump(type_weakness, json_file)
with open('type_strength.json', 'w') as json_file:
    json.dump(type_strength, json_file)