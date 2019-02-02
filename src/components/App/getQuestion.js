import marvel from '../../apis/marvel';

const validOnsaleDate = (comic) => {
    let onsaleDate = comic.dates[0].date;
    return !(onsaleDate.split('-')[0] === '');
};

export const getQuestion = async () => {
    // Make an API call to get the relevant
    // information to form a question.
    const characterName = 'Captain Marvel (Mar-Vell)';
    const characterResponse = await marvel.get(`/v1/public/characters`, {
        params: {
            name: characterName
        }
    });

    const characterId = characterResponse.data.data.results[0].id;

    console.log(characterResponse);
    const comicListResponse = await marvel.get(`v1/public/characters/${characterId}/comics`, {
        params: {
            format: 'comic',
            noVariants: true,
            orderBy: 'onsaleDate'
        }
    });
    
    const comicList = comicListResponse.data.data.results
                      .filter(comic => validOnsaleDate(comic));
    console.log(comicList);
    const firstAppearance = comicList[0].title;
    console.log(firstAppearance);

    return `Which issue contained the first appearance of ${characterName}?`;
};