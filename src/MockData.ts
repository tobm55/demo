interface DataI {
  paragraph: string;
  people: {
    personalInformation: {
      [key: string | number]: {
        name: string;
        gender: "male" | "female";
        race: "foo" | "non-foo";
        age: number;

        // occurrenceId could be traced and generated from occurrences.
        occurrenceIds: number[];
      };
    };
    occurrences: OccurrenceI[];
  };
  characters: {
    occurrences: OccurrenceI[];
  };
  occurrenceMap?: Record<string | number, OccurrenceI>;
  occurrenceList?: OccurrenceI[];
}

interface OccurrenceI {
  id: number;
  type: string;
  occurrenceText: string;
  occurrenceTextLength?: number;
  startIndex: number;

  // nextOccurrenceId is used to generate graph
  nextOccurrenceId: number[] | null;

  //name of the character for person occurrence
  //original text of character for character occurrence
  originalText: string;

  //Ids of corresponding person for character occurrence
  //Ids of corresponding character for person occurrence
  correspondingOccurrenceIds: number[];
}

const Data: DataI = {
  paragraph:
    "Once upon a time in Snow White’s multiverse, there was a hunter. He was commanded by the Dark Queen to murder the princess. Although the hunter is good at hunting, he had no intention to kill the princess and aimed to save the princess. As a result, the princess was never kidnapped or saved. And in the end, the princess baked a cake the night before the wedding while trying to stop crying. During a sunny afternoon, she and he, wearing clothes, married.",
  people: {
    personalInformation: {
      princess: {
        name: "princess",
        gender: "female",
        race: "foo",
        age: 1,
        occurrenceIds: [],
      },
      hunter: {
        name: "hunter",
        gender: "male",
        race: "non-foo",
        age: 1,
        occurrenceIds: [],
      },
    },
    occurrences: [
      {
        id: 0,
        type: "person",
        occurrenceText: "hunter",
        startIndex: 57,
        nextOccurrenceId: [],
        originalText: "hunter",
        correspondingOccurrenceIds: [],
      },
      {
        id: 1,
        type: "person",
        occurrenceText: "He",
        startIndex: 65,
        nextOccurrenceId: [],
        originalText: "hunter",
        correspondingOccurrenceIds: [],
      },
      {
        id: 2,
        type: "person",
        occurrenceText: "princess",
        startIndex: 114,
        nextOccurrenceId: [],
        originalText: "princess",
        correspondingOccurrenceIds: [],
      },
      {
        id: 3,
        type: "person",
        occurrenceText: "hunter",
        startIndex: 137,
        nextOccurrenceId: [],
        originalText: "hunter",
        correspondingOccurrenceIds: [],
      },
      {
        id: 6,
        type: "person",
        occurrenceText: "princess",
        startIndex: 196,
        nextOccurrenceId: [],
        originalText: "princess",
        correspondingOccurrenceIds: [],
      },
      {
        id: 8,
        type: "person",
        occurrenceText: "princess",
        startIndex: 227,
        nextOccurrenceId: [],
        originalText: "princess",
        correspondingOccurrenceIds: [],
      },
      {
        id: 9,
        type: "person",
        occurrenceText: "princess",
        startIndex: 254,
        nextOccurrenceId: [],
        originalText: "princess",
        correspondingOccurrenceIds: [],
      },
      {
        id: 12,
        type: "person",
        occurrenceText: "princess",
        startIndex: 313,
        nextOccurrenceId: [],
        originalText: "princess",
        correspondingOccurrenceIds: [],
      },
      {
        id: 15,
        type: "person",
        occurrenceText: "she",
        startIndex: 419,
        nextOccurrenceId: [],
        originalText: "princess",
        correspondingOccurrenceIds: [],
      },
      {
        id: 16,
        type: "person",
        occurrenceText: "he",
        startIndex: 427,
        nextOccurrenceId: [],
        originalText: "hunter",
        correspondingOccurrenceIds: [],
      },
    ],
  },

  characters: {
    occurrences: [
      {
        id: 4,
        type: "character",
        occurrenceText: "hunting",
        startIndex: 155,
        nextOccurrenceId: null,

        originalText: "hunt",
        correspondingOccurrenceIds: [3],
      },
      {
        id: 5,
        type: "character",
        occurrenceText: "kill",
        startIndex: 187,
        nextOccurrenceId: [],

        originalText: "kill",
        correspondingOccurrenceIds: [6],
      },
      {
        id: 7,
        type: "character",
        occurrenceText: "save",
        startIndex: 218,
        nextOccurrenceId: [],

        originalText: "save",
        correspondingOccurrenceIds: [8],
      },
      {
        id: 10,
        type: "character",
        occurrenceText: "kidnapped",
        startIndex: 273,
        nextOccurrenceId: [],

        originalText: "kidnap",
        correspondingOccurrenceIds: [9],
      },
      {
        id: 11,
        type: "character",
        occurrenceText: "saved",
        startIndex: 286,
        nextOccurrenceId: [9],

        originalText: "save",
        correspondingOccurrenceIds: [],
      },
      {
        id: 13,
        type: "character",
        occurrenceText: "baked",
        startIndex: 322,
        nextOccurrenceId: [],

        originalText: "bake",
        correspondingOccurrenceIds: [12],
      },
      {
        id: 14,
        type: "character",
        occurrenceText: "crying",
        startIndex: 385,
        nextOccurrenceId: [],

        originalText: "cry",
        correspondingOccurrenceIds: [12],
      },
      {
        id: 17,
        type: "character",
        occurrenceText: "wearing",
        startIndex: 431,
        nextOccurrenceId: [],

        originalText: "wear",
        correspondingOccurrenceIds: [15, 16],
      },
      {
        id: 18,
        type: "character",
        occurrenceText: "married",
        startIndex: 448,
        nextOccurrenceId: [],

        originalText: "marry",
        correspondingOccurrenceIds: [15, 16],
      },
    ],
  },
  occurrenceMap: {},
  occurrenceList: [],
};

const sourceData = () => {
  Data.people.occurrences.forEach((item: OccurrenceI) => {
    item.occurrenceTextLength = item.occurrenceText.length;

    Data.occurrenceList?.push(item);

    if (Data.occurrenceMap) Data.occurrenceMap[item.id] = item;

    Data.people.personalInformation[item.originalText].occurrenceIds.push(
      item.id
    );
  });

  Data.characters.occurrences.forEach((item: OccurrenceI) => {
    item.occurrenceTextLength = item.occurrenceText.length;
    Data.occurrenceList?.push(item);
    if (Data.occurrenceMap) Data.occurrenceMap[item.id] = item;
  });

  Data.characters.occurrences.forEach((item: OccurrenceI) => {
    item.correspondingOccurrenceIds.forEach((id: number) => {
      if (Data.occurrenceMap)
        Data.occurrenceMap[id].correspondingOccurrenceIds.push(item.id);
    });
  });
  Data.occurrenceList?.sort((a, b) => a.startIndex - b.startIndex);
};
sourceData();
export type { DataI, OccurrenceI };
export default Data;

/**
 *   const findAllOccurrences = (str: string, substr: string) => {
    let result = [];

    let idx = str.indexOf(substr);

    while (idx !== -1) {
      result.push(idx);
      idx = str.indexOf(substr, idx + 1);
    }
    return result;
  };
 */
