import React from 'react';
import { Text, FlatList, View } from 'react-native';
import { List, ListItem, SearchBar, Avatar } from "react-native-elements";


export default class HomeScreen extends React.Component {
 constructor(props) {
    super(props);

    this.state  = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      base_url: "https://infinity-app-api-1.herokuapp.com/"
    }
  }

  componentDidMount() {
    this.fetchDataFromApi();

  }

  fetchDataFromApi = ()  => {
    // const url = "https://pyconlunchbeta.azurewebsites.net/api/list.json";

    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {

        this.setState({
          data: res,
          error: null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading : false });
      })
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.fetchDataFromApi();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
          marginTop: "3%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => this.props.navigation.navigate('Detail',
              {name: `${item.name}`, menu: `${item.menu}`,
              img: `${this.state.base_url}${item.photo}`,
              address: `${item.address}`})}
              avatar={<Avatar
                      source={{uri: `${this.state.base_url}${item.photo}`}}
                      onPress={() => console.log("Works!")}
                      containerStyle={{marginBottom: 2}}
                      avatarStyle={{resizeMode: "cover"}}
                      width={140}
                      height={130}
                />}
              title={`${item.name}`}
              titleStyle={{ fontSize: 16}}
              titleContainerStyle = {{ marginLeft: 120 }}
              subtitle={<View style={styles.subtitleView}>
            <Text style={styles.menuText}>{item.menu}</Text>
            <Text style={styles.locText}>{item.address}</Text>
            </View>}
              containerStyle={{ borderBottomWidth: 0, marginBottom: 20 }}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}

        />
      </List>
    );
  }
}