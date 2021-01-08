import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, SafeAreaView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Color from '../../Themes/Color';
import Fonts from '../../Themes/Fonts';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

let width = Dimensions.get('window').width;

class index extends Component {
    constructor() {
        super();
    }

    employeeListItem = ({ item }) => {
        return (
            <View style={[styles.mainContainer, { flexDirection: 'row' }]}>
                <View style={styles.listViewContainer}>
                    <Text style={[styles.itemText, { fontWeight: 'bold', fontSize: Fonts.txt_size_large, }]}>
                        {'Name: ' + item.name}</Text>
                    <Text style={styles.itemText}>
                        {'Email: ' + item.email}</Text>
                    <Text style={styles.itemText}>
                        {'Age: ' + item.age}</Text>
                    <Text style={styles.itemText}>
                        {'Gender: ' + item.gender}</Text>
                    <Text style={styles.itemText}>
                        {'Phone: ' + item.phoneNo}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <SafeAreaView style={{ flex: 1, marginHorizontal: Fonts.px_10, marginVertical: Fonts.px_20, }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        data={this.props.employee}
                        renderItem={this.employeeListItem}
                        ItemSeparatorComponent={() => <View style={{ margin: Fonts.px_5 }} />}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: width,
        backgroundColor: Color.white
    },
    listViewContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        padding: Fonts.px_10,
    },
    itemText: {
        color: Color.black,
        fontSize: Fonts.txt_size_small_12,
        padding: Fonts.px_2,
    }
});

const mapStateToProps = state => {
    return {
        employee: state.employee.employeeList
    }
}

export default connect(mapStateToProps, null)(index)