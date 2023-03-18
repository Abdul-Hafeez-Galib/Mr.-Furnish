import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, Button } from 'react-native';

const DetailPage = ({ route, navigation }) => {
  let item = route.params.item;

  return (
    <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        {/* Header */}
        <View style={styles.header}>
            <SafeAreaView>
                <Text
                    style={styles.headerText} 
                    onPress={() => navigation.goBack()}
                >
                Mr. Furnish
                </Text>
                <Text style={{...styles.headerText, fontSize:15}}>The best furniture in the world</Text>
            </SafeAreaView>
        </View>
        {/* Scrollview */}
        <ScrollView style={{ flex: 1, height:"100%", backgroundColor:"green" }} bounces={false}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={item.image}
              />
              <Text style={styles.itemHeader}>{item.name}</Text>
              <Text style={styles.text}>{item.description}</Text>
              <View style={styles.color}>
                <Text style={styles.text}>Colors</Text>
                <View style={{ flexDirection: "row" }}>
                  {item.color.map((color, index) => {
                    return (
                      <View key={index} style={{ ...styles.colorBox, backgroundColor: color }}></View>
                    )
                  })}
                </View>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.text}>Price: ${item.price}</Text>
                <View>
                  <TouchableOpacity style={{ backgroundColor: "green", padding: 10, margin: 10, borderRadius: 5 }}>
                    <View style={{ backgroundColor: "white", width: 80, height: 20, borderRadius: 5 }}>
                      <Text style={{ color: "maroon", textAlign: "center" }}>Add to Cart</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 1,
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    textAlign:"left"
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover"
  },
  itemHeader: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    padding: 10,
    color: "white"
  },
  colorBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5
  },
  container: {
    backgroundColor: "green",
    height: "100%",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default DetailPage;