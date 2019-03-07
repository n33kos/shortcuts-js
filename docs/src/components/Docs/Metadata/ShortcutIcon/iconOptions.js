const colors = [
  'RED',
  'DARK_ORANGE',
  'ORANGE',
  'YELLOW',
  'GREEN',
  'TEAL',
  'LIGHT_BLUE',
  'BLUE',
  'DARK_BLUE',
  'DARK_PURPLE',
  'LIGHT_PURPLE',
  'PINK',
  'DARK_GRAY',
  'GRAY',
  'BLUE_GRAY',
];

const glyphs = [
  ['Objects', [
    ['CAR', 0xE83C],
    ['BUS', 0xE91E],
    ['MOTORBIKE', 0xE987],
    ['AMBULANCE', 0xE904],
    ['AIRPLANE', 0xE900],
    ['BOAT', 0xE9AF],
    ['HOME', 0xE96B],
    ['CHURCH', 0xE928],
    ['CITY', 0xE91D],
    ['CART', 0xE9B4],
    ['BAG', 0xE966],
    ['SHOP', 0xE963],
    ['UTENSILS', 0xE9D7],
    ['FUEL', 0xE95D],
    ['THERMOMETER', 0xE9CE],
    ['SUN', 0xE9C5],
    ['MOON', 0xE986],
    ['SNOW', 0xE9BB],
    ['CLOUD', 0xE942],
    ['RAIN', 0xE943],
    ['UMBRELLA', 0xE9D5],
    ['TREE', 0xE953],
    ['FLOWER', 0xE84C],
    ['FLAME', 0xE956],
    ['STEPS', 0xE95A],
    ['SIGN', 0xE94C],
    ['BINOCALARS', 0xE915],
    ['COMPASS', 0xE945],
    ['GLOBE', 0xE814],
    ['MOUNTAIN', 0xE989],
    ['IMAGE', 0xE988],
    ['VIDEO', 0xE82E],
    ['FILM', 0xE955],
    ['CAMERA', 0xE922],
    ['VIDEOCAM', 0xE80A],
    ['MICROPHONE', 0xE984],
    ['RECORD_VIDEO', 0xE98B],
    ['YOUTUBE', 0xE8BA],
    ['CLIPBOARD', 0xE93F],
    ['CALENDAR', 0xE921],
    ['CHATBUBBLE', 0xE816],
    ['CHATBUBBLES', 0xE80B],
    ['CHATBOX', 0xE983],
    ['MAIL', 0xE97D],
    ['MAIL_OPEN', 0xE97E],
    ['PAPER_PLANE', 0xE9BC],
    ['BRIEFCASE', 0xE91C],
    ['FOLDER', 0xE959],
    ['CARD', 0xE947],
    ['WATCH', 0xE9D9],
    ['CALL', 0xE86A],
    ['PHONE', 0xE9A6],
    ['LAPTOP', 0xE82C],
    ['KEYBOARD', 0xE836],
    ['KEYBOARD_OUTLINE', 0xE866],
    ['CALCULATOR', 0xE920],
    ['STATS', 0xE90E],
    ['PRINT', 0xE9A9],
    ['HDD', 0xE968],
    ['SERVER', 0xE94A],
    ['DATABASE', 0xE87F],
    ['DATABASE_NETWORK', 0xE9B2],
    ['FILING', 0xE905],
    ['CUBE', 0xE949],
    ['TV', 0xE9CB],
    ['GAMEPAD', 0xE95E],
    ['PUZZLE', 0xE9AA],
    ['HEADPHONES', 0xE969],
    ['MUSIC', 0xE98E],
    ['SPEAKER', 0xE9BF],
    ['BOOKS', 0xE917],
    ['BOOK', 0xE849],
    ['BOOK_BOOKMARK', 0xE918],
    ['GLASSES', 0xE844],
    ['SUNGLASSES', 0xE961],
    ['MASK', 0xE981],
    ['TICKET', 0xE98C],
    ['MASKS', 0xE952],
    ['DICE', 0xE94B],
    ['BASEBALL', 0xE90F],
    ['BASKETBALL', 0xE910],
    ['FOOTBALL', 0xE9BD],
    ['TENNISBALL', 0xE9CC],
    ['AMERICAN_FOOTBALL', 0xE840],
    ['LIFE_RING', 0xE972],
    ['TELESCOPE', 0xE9CA],
    ['MICROSCOPE', 0xE985],
    ['HORSE', 0xE96C],
    ['TIME', 0xE940],
    ['ALARM', 0xE901],
    ['TIMER', 0xE9C4],
    ['SOUND', 0xE86E],
    ['BELL', 0xE913],
    ['CONCIERGE_BELL', 0xE9BE],
    ['HEART', 0xE96A],
    ['STAR', 0xE9C1],
    ['TROPHY', 0xE9D4],
    ['BULB', 0xE973],
    ['BOLT', 0xE974],
    ['FLAG', 0xE958],
    ['TAG', 0xE9C8],
    ['KEY', 0xE970],
    ['HOURGLASS', 0xE96D],
    ['LOCK', 0xE97A],
    ['UNLOCK', 0xE9D6],
    ['BATTERY', 0xE861],
    ['WAND', 0xE877],
    ['WAND_STAR', 0xE97B],
    ['BRUSH', 0xE991],
    ['PENCIL', 0xE996],
    ['ATTACH', 0xE992],
    ['CUT', 0xE9B0],
    ['ZOOM', 0xE97C],
    ['LINK', 0xE925],
    ['PIPETTE', 0xE944],
    ['MALLET', 0xE964],
    ['WRENCH', 0xE9DE],
    ['HAMMER_WRENCH', 0xE965],
    ['GEARS', 0xE95F],
    ['HAMMER', 0xE851],
    ['SCREWDRIVER', 0xE9B1],
    ['HAND', 0xE967],
    ['STOP', 0xE84F],
    ['TRASH', 0xE9D3],
    ['WATER', 0xE9DA],
    ['MUG', 0xE98D],
    ['SOUP', 0xE9C2],
    ['APPLE', 0xE95C],
    ['CARROT', 0xE923],
    ['FISH', 0xE957],
    ['CAKE', 0xE91F],
    ['BOTTLE', 0xE9DC],
    ['COCKTAIL', 0xE980],
    ['HANGER', 0xE941],
    ['WASHER', 0xE971],
    ['OVEN', 0xE990],
    ['SHIRT', 0xE9B3],
    ['BATHTUB', 0xE911],
    ['SHOWER', 0xE9B5],
    ['PILL', 0xE845],
    ['PILLS', 0xE9A7],
    ['MEDICINE', 0xE982],
    ['PLASTER', 0xE90C],
    ['INHALER', 0xE96F],
    ['STETHOSCOPE', 0xE9C3],
    ['SYRINGE', 0xE9C7],
    ['ATOM', 0xE909],
    ['FLASK', 0xE926],
    ['CAT', 0xE924],
    ['DOG', 0xE950],
    ['PAW', 0xE994],
    ['LIKE', 0xE9D1],
    ['SCHOOL', 0xE962],
    ['GIFT', 0xE960],
    ['ALIEN', 0xE903],
    ['BED', 0xE912],
    ['STAIRS', 0xE9C0],
    ['ROCKET', 0xE9AE],
  ]],
  ['People', [
    ['GIRL', 0xE90A],
    ['BOY', 0xE90B],
    ['FACE', 0xE927],
    ['MAN', 0xE97F],
    ['WOMAN', 0xE9DD],
    ['DISABLED', 0xE99E],
    ['PERSON', 0xE999],
    ['PEOPLE', 0xE998],
    ['CROWD', 0xE997],
    ['BODY', 0xE82D],
    ['PODIUM', 0xE99A],
    ['STUDENT', 0xE99C],
    ['DANCING', 0xE99B],
    ['WEIGHT_LIFTING', 0xE99F],
    ['SKIING', 0xE9A1],
    ['SNOWBOARDING', 0xE9A2],
    ['SWIMMING', 0xE9A3],
    ['HIKING', 0xE99D],
    ['RUNNING', 0xE9A0],
    ['WALKING', 0xE9A4],
    ['ELDERLY', 0xE9A5],
  ]],
  ['Symbols', [
    ['WARNING', 0xE902],
    ['UNDO', 0xE906],
    ['REDO', 0xE907],
    ['BOOKMARK', 0xE916],
    ['BARCODE', 0xE90D],
    ['QRCODE', 0xE9AB],
    ['BOX', 0xE919],
    ['BOX_OUTLINE', 0xE91A],
    ['BRAILLE', 0xE91B],
    ['CIRCLE_LEFT', 0xE930],
    ['CIRCLE_RIGHT', 0xE939],
    ['CIRCLE_BOTTOM', 0xE92D],
    ['CIRCLE_UP', 0xE93B],
    ['CIRCLE_DOWN', 0xE92C],
    ['CIRCLE_TOP', 0xE93C],
    ['CIRCLE_PLAY', 0xE933],
    ['CIRCLE_REWIND', 0xE938],
    ['CIRCLE_POWER', 0xE936],
    ['CIRCLE_STOP', 0xE93A],
    ['CIRCLE_FASTFORWARD', 0xE92F],
    ['CIRCLE_QUESTION', 0xE937],
    ['CIRCLE_CHECKMARK', 0xE92A],
    ['CIRCLE_PLUS', 0xE934],
    ['CIRCLE_CROSS', 0xE93D],
    ['CIRCLE_DOLLAR', 0xE92B],
    ['CIRCLE_EURO', 0xE92E],
    ['CIRCLE_POUND', 0xE935],
    ['CIRCLE_YEN', 0xE93E],
    ['CIRCLE_BITCOIN', 0xE929],
    ['CIRCLE_PI', 0xE932],
    ['CIRCLE_INFO', 0xE931],
    ['SMILEY', 0xE9BA],
    ['CSS', 0xE94D],
    ['DOLLAR', 0xE803],
    ['EURO', 0xE878],
    ['POUND', 0xE838],
    ['YEN', 0xE87A],
    ['BITCOIN', 0xE87B],
    ['MEDICAL', 0xE908],
    ['DOCUMENT', 0xE94E],
    ['DOCUMENT_OUTLINE', 0xE94F],
    ['NOTE', 0xE975],
    ['PAPER', 0xE976],
    ['NEWS', 0xE98F],
    ['APPS', 0xE95B],
    ['MORE', 0xE800],
    ['LIST', 0xE835],
    ['COLLECTION', 0xE80D],
    ['SHARE', 0xE946],
    ['INFINITE', 0xE96E],
    ['RECYCLE', 0xE9AC],
    ['LOADING', 0xE977],
    ['LOADING_DOTS', 0xE87C],
    ['PLAY_VIDEO', 0xE9D8],
    ['TARGET', 0xE9C9],
    ['PODCAST', 0xE9A8],
    ['BULLSEYE', 0xE83E],
    ['LOCATION_ARROW', 0xE978],
    ['LOCATION_MARKER', 0xE979],
    ['PARKING', 0xE993],
    ['CROP', 0xE948],
    ['COMPRESS', 0xE9B6],
    ['MINIMIZE', 0xE9B7],
    ['MOVE', 0xE98A],
    ['REPEAT', 0xE9AD],
    ['SYNC', 0xE9C6],
    ['PLAY', 0xE874],
    ['SHUFFLE', 0xE9B8],
    ['SLIDERS', 0xE9B9],
    ['RSS', 0xE869],
    ['CONNECTION', 0xE954],
    ['WIFI', 0xE9DB],
    ['QUOTE', 0xE951],
    ['PEACE', 0xE995],
    ['FILTER', 0xE9D0],
    ['FONT', 0xE9CD],
    ['CLOUD_SERVICE', 0xE843],
  ]],
  ['Unreleased', [
    ['BIKE', 0xE914],
    ['TRAIN', 0xE9D2]
  ]],
];

export {
  colors,
  glyphs,
};
