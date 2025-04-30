import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppText, BOLD, FOURTEEN } from './AppText'
import { Colors } from '../theme'

const TabButton = ({tab, activeTab, handleOnPress}) => {
    
  return (
    <View style={styles.tabContainer}>
          {tab.map((item, index) => (
            <TouchableOpacity
            key={item?.id}
              style={[
                styles.tabButton,
                activeTab === index && styles.activeTab,
              ]}
              onPress={()=>handleOnPress(index)}>
              <AppText
                type={FOURTEEN}
                weight={BOLD}
                style={{
                  color:
                    activeTab == index ? Colors.white : Colors.placeholderColor,
                }}>
                {item.title}
              </AppText>
            </TouchableOpacity>
          ))}
        </View>
  )
}

export default TabButton

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        paddingVertical:2,
        
      },
      tabButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius:8,
        overflow:'hidden',
      },
      activeTab: {
        backgroundColor: '#8DC63F',
        elevation:5,
        margin:2
      },
      tabText: {
        fontSize: 16,
        color: '#666',
      },
      activeText: {
        color: 'white',
        fontWeight: 'bold',
      },
})