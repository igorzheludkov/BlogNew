import {ParamListBase} from '@react-navigation/native';

export type MainBottomTabs = {
  MainStack: undefined;
};

export interface PostsStackTypes extends ParamListBase {
  PostsFeedScreen: undefined;
  PostShowScreen: {id: string | number};
  PostAddScreen: undefined;
}
