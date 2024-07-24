

export default function Navbars() {
    return (
        <SafeAreaView>

        </SafeAreaView>

        <SafeAreaView 
        style={styles.bottomNavbar}>
        <TouchableOpacity style={styles.menuItem}
        >
            <Text style={styles.menuText_Focus}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => navigation.navigate('RoomBooked')}
        >
            <Text style={styles.menuText}>RoomBooked</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
        </SafeAreaView>            
    )
}


const styles = StyleSheet.create({
    container: {
        top: 0,
        flex: 1,
    },
    topNavbar: {
        height: 90,
        backgroundColor: colors.dark,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        top: 25,
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
    },
    bottomNavbar: {
        position: "absolute",
        bottom: 30,
        left: 10,
        right: 10,
        backgroundColor: colors.dark,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 10,
        padding: 10, 
        paddingBottom: SafeAreaView + 10, // add safe area padding to existing padding
        elevation: 10, // shadow for Android
        shadowColor: '#000', // shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    menuItem: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        padding: 10, // some padding
    },
    menuText: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.white,
    },
    menuText_Focus: {
        ontSize: 16,
        fontWeight: "bold",
        color: colors.secondary,
    },
    RoomContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    RoomTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    RoomList: {
        flexDirection: 'row', // arrange items in rows
        flexWrap: 'wrap', // allow items to wrap onto multiple lines
        justifyContent: 'space-between', // add space between items
        margin: 20,
    },
    RoomItem: {
        width: '45%', // set a fixed width
        height: '45%', // set a fixed height
        backgroundColor: colors.light,
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000', // shadow color
        shadowOffset: { width: 0, height: 2 }, // shadow offset
        shadowOpacity: 0.25, // shadow opacity
        shadowRadius: 3.84, // shadow radius
        elevation: 5, // shadow for Android
        margin: 5,
    },
    RoomText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    RoomImage: {
        width: '100%', // take up the full width of its container
        height: '70%', // take up 70% of the height of its container
        resizeMode: 'cover', // scale the image to cover its container
    },

});