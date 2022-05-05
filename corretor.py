# Autor: Gabriel Pedro Mares Azevedo
# Este projeto foi realizado em 14/12/2020 na disciplina de Programação I

# O objetivo deste projeto é criar um corretor ortográfico.

### IMPORTS ###
import re
###############

### CONSTANTES ###
caracteresEspeciais = ['\s','0','1','2','3','4','5','6','7','8','9','(',')','[',']',':',';','?','!']
##################

### FUNCOES ###
def carregarVocabulario(filename):
    """_summary_

    Args:
        filename (str): _description_

    Returns:
        dic: dicionario com todas as palavras
    """  
    print(type(filename))
    dic = set()
    for line in open(filename, 'r', encoding='utf8'):
        dic.add(line.rstrip().lower())
    return sorted(dic)

def gerarPalavras(texto):
    """ recebe uma string com texto, e devolve uma lista com as várias palavras contidas na string, pela ordem que aparecem.
    Args:
        texto (string): palavra
        

    Returns:
        list: lista com as várias palavras contidas na string, pela ordem que aparecem.
    """ 
    lista = []
    for token in texto:
        if token not in caracteresEspeciais:
            if token == ',' or token == '.' or token == '\n':
                token = " "
            lista.append(token)
            resultado = "".join(lista)
            resultado = resultado.split()
    return resultado

def mmLetras(palavra1, palavra2):
    """ a subtração entre o tamanho da maior palavra dada e o número de letras iguais nas mesmas posições entre as duas palavras.

    Args:
        palavra1 (string): palavra
        palavra2 (string): palavra

    Returns:
        int: distancia entre as palavras
    """    
    var = sum(palavra1 == palavra2 for palavra1, palavra2 in zip(palavra1, palavra2))
    if len(palavra1) >= len(palavra2):
      resultado = len(palavra1) - var
      return resultado
    else:
      resultado = len(palavra2) - var
      return resultado

def edicoes(palavra1, palavra2):
    """ devolve o número mínimo de operações de edição necessárias para transformar uma palavra na outra.
    (inserir uma letra numa qualquer posição, apagar uma letra ou substituir uma letra por outra letra)

    Args:
        palavra1 (str): palavra
        palavra2 (str): palavra

    Returns:
        int: numero de operações para transformar uma palavra na outra
    """    
    linhas = [x for x in palavra1]
    colunas = [y for y in palavra2] 
    linhas.insert(0,"[]")
    colunas.insert(0,"[]") 
    grelha = [[0]*len(colunas) for _ in range(len(linhas))]
    for i in range(len(colunas)):
        grelha[0][i] = i 
    for j in range(len(linhas)):
        grelha[j][0] = j 
    for linha in range(1,len(linhas)):
        for coluna in range(1,len(colunas)):
            if colunas[coluna] != linhas[linha]:
                grelha[linha][coluna] = min(grelha[linha-1][coluna] + 1,grelha[linha][coluna-1] + 1,grelha[linha-1][coluna-1] + 1)
            else:        
                grelha[linha][coluna] = grelha[linha-1][coluna-1]
    resultado = grelha[-1][-1]
    return resultado

def sugerir(dic, palavra, distancia, maxSugestoes=5):
    """ recebe um vocabulário, uma palavra, uma função de distância e um inteiro positivo n de sugestões
    e devolve uma lista de n palavras do vocabulário mais próximas da palavra dada, de acordo com a função de distância.

    Args:
        dic (dict): dicionario com palavras
        palavra (str): palavra requerida
        distancia (int): distancia da palavra mais próxima
        maxSugestoes (int, optional): _description_. Defaults to 5.

    Returns:
        list: lista com as palavras mais próximas encontradas
    """    
    listaDistancias = []
    resultado = []
    listaOrdenada = []
    posicao = []
    for variante in dic:
        listaDistancias.append(distancia(palavra,variante))
    for i in listaDistancias:
        listaOrdenada.append(i)
    listaOrdenada.sort()
    for i in listaOrdenada[:maxSugestoes]:
        for j in listaDistancias:
            if i == j:
                while len(posicao) < maxSugestoes:
                    if j in listaDistancias:
                        posicao.append(listaDistancias.index(j))
                        listaDistancias[listaDistancias.index(j)] = ""
                    else:
                        j = j + 1
    for posicoes in posicao:
            resultado.append(dic[posicoes])
            resultado.sort()
    return resultado

def corretor(dic, texto, distancia, maxSugestoes=5): 
    """ recebe um vocabulário, um texto, uma função de distância e um inteiro positivo n de sugestões e imprime um relatório com as correções sugeridas.

    Args:
        dic (dict): dicionario com o vocabulario
        texto (str): frase que deseja a sugestão de correções
        distancia (int): distancia da palavra mais próxima para cada palavra da frase
        maxSugestoes (int, optional): _description_. Defaults to 5.

    Returns:
        _type_: _description_
    """    
    listaPalavras = gerarPalavras(texto)
    seta = "-->"
    listaSugestoes = []
    resultado = ""
    for palavra in listaPalavras:
        if len(list(palavra)) <= 2:
            listaPalavras.remove(palavra)
    for palavra in listaPalavras:
        listaSugestoes.append(sugerir(dic,palavra,distancia,maxSugestoes))
        for sugestao in listaSugestoes:
            if listaPalavras.index(palavra) == listaSugestoes.index(sugestao):
                resultado = print(palavra,seta,sugestao)
    print(type(resultado))
    return resultado





