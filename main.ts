import Hati from './src';

(async () => {
    const info = Hati.getInstance(
        new Date('1994-11-26T06:41:00'),
        0,
        126.38,
        37.21
    );
    console.log(info);
})();
