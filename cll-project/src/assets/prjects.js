const wordsTitle = ['Minimal Bedroom', 'Classic Minimal Bedroom', 'Modern Bedroom', 'System Table', 'Minimal Bedroom table', 'pineapple'];
const wordsTags = ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'];
const objects = [];

for (let i = 0; i < 20; i++) {
    const randomTitle = wordsTitle[Math.floor(Math.random() * wordsTitle.length)];
    const randomTag = wordsTags[Math.floor(Math.random() * wordsTags.length)];
    const randomImg = `img-${Math.floor(Math.random() * 2) + 1}`;
    const randomImgHeight = Math.floor(Math.random() * (860 - 520 + 1)) + 520;
    const randomFavorite = Math.random() < 0.5;

    objects.push({
        title: randomTitle,
        tag: randomTag,
        img: randomImg,
        imgHeight: randomImgHeight,
        favorite: randomFavorite,
    });
}

console.log('objects[0] :>> ', objects[0]);

export default objects;