import {
  View,
  StyleSheet,
  Image,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../theme';
import {AppText, BOLD, EIGHTEEN, NORMAL, SIXTEEN, WHITE} from './AppText';
import NavigationService from '../navigation/NavigationService';
import {backIcon} from '../utils/imageAssets';

import * as routes from '../navigation/routes';

interface ToolBarProps {
  title: string;
  rightIcon: string;
  containerStyle: ViewStyle;
  tintColor: string;
  leftTitle: string;
  handleLeftOnPress: () => void | undefined;
  isBack: boolean | undefined;
  left: boolean | undefined;
}

const ToolBar: FC<ToolBarProps> = ({
  title,
  leftTitle,
  rightIcon,
  containerStyle,
  tintColor,
  handleLeftOnPress,
  isBack,
  left,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {left && (
        <TouchableOpacity
          onPress={() => {
            isBack ? NavigationService.goBack() : handleLeftOnPress();
          }}>
            {
               leftTitle ?  <AppText type={SIXTEEN} weight={NORMAL} color={WHITE}>
               {leftTitle}
             </AppText> : 
             <Image
             source={backIcon}
             style={{width: 25, height: 25}}
             resizeMode="contain"
             tintColor={Colors.white}
           />
            }
          
        </TouchableOpacity>
      )}
      {/* {leftTitle && (
        <TouchableOpacity 
        onPress={handleLeftOnPress}
        >
       
        </TouchableOpacity> 
        )
      } */}
      <View style={styles.secondContainer}>
        <AppText color={WHITE} weight={BOLD} type={EIGHTEEN}>
          {title}
        </AppText>
      </View>
      {rightIcon && (
        <TouchableOpacity onPress={() => NavigationService.navigate(routes?.NOTIFICATION_SCREEN)}>
          <Image
            source={rightIcon}
            style={styles.iconStyle}
            resizeMode="contain"
            tintColor={tintColor ? tintColor : Colors.white}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ToolBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  secondContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
});
