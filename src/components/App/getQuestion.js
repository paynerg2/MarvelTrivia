import marvel from '../../apis/marvel';

const validOnsaleDate = (comic) => {
    // Some dates aren't correct in the API, returning
    // -0001-xx-xx. Returns a list with those items
    // filtered out.
    let onsaleDate = comic.dates[0].date;
    return !(onsaleDate.split('-')[0] === '');
};

const rotateArray = (array, times) => {
    if(times < 0) return;
    while(times--){
        var temp = array.shift();
        array.push(temp);
    }
};

// TODO: Clean up these methods - break out some of the functionality
//       into helper functions for readability.

export const getRandomComic = async (startYear, endYear) =>  {
    // Current implementation:
    // Get a list of comics from a random one month span between 1950
    // and 1980, then pick one at random.
    // TODO: Implement a way to find a random issue more consistent with
    //       the correct answer choice.

    let randomMonth = Math.floor(Math.random(1, 11) * 12);
    let endMonth = (randomMonth + 1) % 13 === 0 ? 1 : randomMonth + 1;
    let randomYear = Math.floor(Math.random(0, 30) * 30 + 1950);
    let dateRange = `${randomYear}-${randomMonth}-01,${randomYear}-${endMonth}-01`;
    console.log(dateRange);
    const response = await marvel.get(`v1/public/comics`, {
        params: {
            dateRange: dateRange
        }
    });
    const randomIndex = Math.floor(Math.random(20));
    const randomComic = response.data.data.results[randomIndex].title;

    return randomComic;
}

export const getQuestion = async () => {
    // Get character ID, which is used to retrieve a
    // list of comics they appeared in ordered by onsale date.
    // The first item on that list will be their first appearance.
    const characterName = 'Spider-Man';
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

    
    // TODO: Dont filter the entire list to speed things up with a 'first'
    //       implementation.
    const comicList = comicListResponse.data.data.results
                      .filter(comic => validOnsaleDate(comic));
    const firstAppearance = comicList[0].title;

    let answerList = [{text: `${firstAppearance}`, isCorrect: true}];
    for(let i = 0; i < 3; i++){
        const randomAnswer = await getRandomComic();
        answerList.push({text: `${randomAnswer}`, isCorrect: false })
    }
    rotateArray(answerList, Math.floor(Math.random() * answerList.length));
    return {
        question: `Which issue contained the first appearance of ${characterName}?`,
        answerList: answerList
    };
};