export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

const inititalState = {
  posts: [
    {
      id: 1,
      content: "test",
      createAt: "2021-05-08",
      User: {
        id: 1,
        name: "test",
        email: "test",
      },
      Comment: [
        {
          id: 1,
          content: "댓글댓글",
          createAt: "2021-05-08",
          User: {
            id: 1,
            name: "test",
            email: "test",
          },
        },
        {
          id: 2,
          content: "댓글댓글",
          createAt: "2021-05-08",
          User: {
            id: 1,
            name: "test",
            email: "test",
          },
        },
        {
          id: 3,
          content: "댓글댓글",
          createAt: "2021-05-08",
          User: {
            id: 1,
            name: "test",
            email: "test",
          },
        },
      ],
    },
    {
      id: 1,
      content: "test",
      createAt: "2021-05-08",
      User: {
        id: 1,
        name: "test",
        email: "test",
      },
      Comment: [
        {
          id: 1,
          content: "댓글댓글",
          createAt: "2021-05-08",
          User: {
            id: 1,
            name: "test",
            email: "test",
          },
        },
        {
          id: 2,
          content: "댓글댓글",
          createAt: "2021-05-08",
          User: {
            id: 1,
            name: "test",
            email: "test",
          },
        },
        {
          id: 3,
          content: "댓글댓글",
          createAt: "2021-05-08",
          User: {
            id: 1,
            name: "test",
            email: "test",
          },
        },
      ],
    },
  ],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

const post = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };

    default:
      return state;
  }
};

export default post;
