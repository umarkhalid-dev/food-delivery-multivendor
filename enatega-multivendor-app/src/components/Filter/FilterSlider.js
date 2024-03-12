import React, { useState, useContext } from 'react'
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Modal,
  SafeAreaView
} from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import CheckboxBtn from '../../ui/FdCheckbox/CheckboxBtn'
import RadioButton from '../../ui/FdRadioBtn/RadioBtn'
import TextDefault from '../Text/TextDefault/TextDefault'
import styles from './styles'

import ThemeContext from '../../ui/ThemeContext/ThemeContext'
import { theme } from '../../utils/themeColors'
import { FILTER_TYPE } from '../../screens/Menu/Menu'

const Filters = ({ filters, setFilters, applyFilters }) => {
  const themeContext = useContext(ThemeContext)
  const currentTheme = theme[themeContext.ThemeValue]
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('all')

  const result =filters &&  Object.keys(filters).filter(k =>
    selectedFilter === 'all'
      ? filters[k]
      : selectedFilter === k
        ? filters[k]
        : null
  )

  const handleOptionsClick = () => {
    setSelectedFilter('all')
    setModalVisible(true)
  }

  const handleFilterClick = filter => {
    setSelectedFilter(filter)
    setModalVisible(true)
  }

  const handleValueSelection = (filterTitle, filterValue) => {
    // console.log('handleValueSelection', filterTitle, filterValue)
    const selectedFilter = filters[filterTitle]
    if (selectedFilter.type === FILTER_TYPE.RADIO) {
      selectedFilter.selected = [filterValue]
    } else {
      const index = selectedFilter.selected.indexOf(filterValue)
      if (index > -1) {
        selectedFilter.selected = selectedFilter.selected.filter(
          a => a !== filterValue
        )
      } else selectedFilter.selected.push(filterValue)
    }
    setFilters({ ...filters, [filterTitle]: selectedFilter })
    // console.log({ ...filters, [filterTitle]: selectedFilter })
  }
  // console.log('Filters => ', JSON.stringify(filters, null, 4))

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles(currentTheme).container}>
      <TouchableOpacity
        style={styles(currentTheme).filterButton}
        onPress={handleOptionsClick}>
        <Ionicons name="options" size={24} color="#000" />
      </TouchableOpacity>

      {filters && Object.keys(filters)?.map((filter, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles(currentTheme).filterButton,
            selectedFilter === filter &&
              styles(currentTheme).selectedFilterButton
          ]}
          onPress={() => handleFilterClick(filter)}>
          <SafeAreaView style={styles(currentTheme).itemContainer}>
            <Text style={styles(currentTheme).filterButtonText}>{filter}</Text>
            <AntDesign name="down" size={14} color="black" />
          </SafeAreaView>
        </TouchableOpacity>
      ))}

      <Modal visible={modalVisible} adjustToContentHeight animationType="slide">
        <View style={styles(currentTheme).modalHeader}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles(currentTheme).filterText}> Filters</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles(currentTheme).modalContainer}>
          {result.map(filterValue => (
            <View key={filterValue}>
              <Text style={styles(currentTheme).modalTitle}>{filterValue}</Text>
              <View>
                {filters && filters[filterValue].values.map((value, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      { flexDirection: 'row', justifyContent: 'space-between' },
                      styles(currentTheme).modalItem,
                      filters[filterValue].selected === value &&
                        styles(currentTheme).selectedModalItem
                    ]}
                    onPress={() => handleValueSelection(filterValue, value)}>
                    <Text style={styles(currentTheme).modalItemText}>
                      {value}
                    </Text>
                    {filters && filters[filterValue].type ===
                    FILTER_TYPE.CHECKBOX ? (
                        <CheckboxBtn
                          checked={filters[filterValue].selected.includes(value)}
                          onPress={() => handleValueSelection(filterValue, value)}
                        />
                      ) : (
                        <RadioButton
                          size={12}
                          innerColor={currentTheme.main}
                          outerColor={currentTheme.radioOuterColor}
                          isSelected={filters[filterValue].selected.includes(
                            value
                          )}
                          onPress={() => handleValueSelection(filterValue, value)}
                        />
                      )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false)
              applyFilters && applyFilters()
            }}
            activeOpacity={0.5}
            style={styles(currentTheme).saveBtnContainer}>
            <TextDefault textColor={'black'} H4 bold>
              Apply
            </TextDefault>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </ScrollView>
  )
}

export default Filters
