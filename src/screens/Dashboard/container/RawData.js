import AsyncStorage from '@react-native-async-storage/async-storage';

const intitalTimeForOven = 30;
const intitalTimeForGas = 2;

export const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@dashboardData', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@dashboardData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const _clearAll = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Done');
  } catch (error) {
    console.log(error);
  }
};

export const decksBoxes = [
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
  {
    boxName: null,
    boxTime: 30,
    remainingSecs: 0,
    active: false,
  },
];

export const dashboardData = {
  oven: {
    selected: true,
    selectedDeck: 0,
    decks: [
      {
        id: 0,
        name: 'Oven1',
        deckSelected: true,
        deckBoxes: [
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
        ],
      },
      {
        id: 0,
        name: 'Oven2',
        deckSelected: true,
        deckBoxes: [
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
        ],
      },
      {
        id: 0,
        name: 'Oven3',
        deckSelected: true,
        deckBoxes: [
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
        ],
      },
      {
        id: 0,
        name: 'Oven4',
        deckSelected: true,
        deckBoxes: [
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForOven,
            remainingSecs: 0,
            active: false,
          },
        ],
      },
    ],
  },
  gas: {
    selectted: false,
    selectedDeck: 0,
    decks: [
      {
        id: 0,
        name: 'Gas1',
        deckSelected: true,
        deckBoxes: [
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
        ],
      },
      {
        id: 0,
        name: 'Gas2',
        deckSelected: true,
        deckBoxes: [
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
        ],
      },
      {
        id: 0,
        name: 'Gas3',
        deckSelected: true,
        deckBoxes: [
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
        ],
      },
      {
        id: 0,
        name: 'Gas4',
        deckSelected: true,
        deckBoxes: [
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
          {
            boxName: null,
            boxTime: intitalTimeForGas,
            remainingSecs: 0,
            active: false,
          },
        ],
      },
    ],
  },
};
