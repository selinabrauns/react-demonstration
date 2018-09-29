import { commonActions } from '../actions/commonAction';


const initialState = {
  housesLoading: true,
  houses: [],
  houseData: {},
  characterNames: {},
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {

    case commonActions.getHouses().type: {
      return { ...state, housesLoading: true };
    }

    case commonActions.getHousesSuccess().type: {
      return { ...state, housesLoading: false, ...action.payload };
    }

    case commonActions.getHousesFailure().type: {
      return { ...state, housesLoading: false, houses: initialState.houses, houseData: initialState.houseData };
    }

    case commonActions.getCharactersSuccess().type: {
      return { ...state, characterNames: action.payload };
    }

    case commonActions.getCharactersFailure().type: {
      return { ...state, characters: initialState.characterNames };
    }

    default: {
      return { ...state };
    }
  }
};

export default commonReducer;