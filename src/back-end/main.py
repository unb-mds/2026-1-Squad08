from services.camara_api import listar_proposicoes

proposicoes = listar_proposicoes()

for proposicao in proposicoes:
    print(proposicao["id"])
    print(proposicao["ementa"])
    print("------ # -------")