import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import DrawerNavigator from './src/components/drawerNavigator';

export default class Main extends Component {
    render() {
      return (
          <View style={styles.container}>
            <DrawerNavigator navigation={this.props.navigation} />
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    }
  });
  