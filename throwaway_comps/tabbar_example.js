navigate (routeName) {
  this.props.navigator.push({
    name: routeName
  })
}

state = {
  selectedTab: 'redTab',
  notifCount: 0,
  presses: 0,
};

_renderContent = (color: string, pageText: string, num?: number) => {
  return (
    <ViewContainer style={[styles.tabContent, {backgroundColor: color}]}>
      <StatusBarBackground/>
      <Text style={styles.tabText}>{pageText}</Text>
      <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
    </ViewContainer>
  );
};

render() {
  return (
      <TabBarIOS
        unselectedTintColor="dodgerblue"
        tintColor="dodgerblue"
        barTintColor="white">

        <Icon.TabBarItem
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'homeTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#00ff00', 'Home Tab', this.state.notifCount)}
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Blue Tab"
          iconName="ios-book-outline"
          selectedIconName="ios-book"
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </Icon.TabBarItem>


      <Icon.TabBarItem
        title="RedTab"
        systemIcon="history"
        iconName="ios-time-outline"
        selectedIconName="ios-time"
        selected={this.state.selectedTab === 'redTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'redTab',
            notifCount: this.state.notifCount + 1,
          });
        }}>
        {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
      </Icon.TabBarItem>

    </TabBarIOS>
  );
}
}

var styles = StyleSheet.create({
tabContent: {
  flex: 1,
  alignItems: 'center',
},
tabText: {
  color: 'white',
  margin: 50,
},
});
