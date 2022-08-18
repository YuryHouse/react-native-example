import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ListRenderItem,
    Dimensions
} from 'react-native';
import {useCallback} from "react";
import {StatusBar} from "expo-status-bar";

const {width, height} = Dimensions.get('screen');

const WIDTH = width;
const HEIGHT = height;
const PADDING = 10;

type ArrayDataType = {
    id: number
    title: string
    count: number
}

const arrayData: ArrayDataType[] = new Array(100)
    .fill(null)
    .map((_, index) => ({
        id: index + 1,
        title: `Title_${index + 1}`,
        count: (index + 1) * 5,
    }))

export default function App() {
    const renderItem: ListRenderItem<ArrayDataType> = useCallback(({item, index, separators}) => (
        <View style={[styles.item, {backgroundColor: index % 3 ? 'tomato' : 'violet'}]}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.count}$</Text>
        </View>
    ), []);

    const keyExtractor = useCallback((item: any, index: any) => `${item.title}.${index}`, []);

    return (
        <View style={styles.container}>
            <Text>123123</Text>
            <FlatList
                data={arrayData}
                numColumns={2}
                columnWrapperStyle={{justifyContent: "space-between"}}
                contentContainerStyle={{paddingHorizontal: PADDING}}
                renderItem={renderItem}
                keyExtractor={keyExtractor}/>
            <StatusBar style="auto"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50
    },
    item: {
        width: (WIDTH - PADDING * 2) / 2 - (PADDING / 2),
        height: (WIDTH - PADDING * 2) / 2 - (PADDING / 2),
        backgroundColor: 'violet',
        marginVertical: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        lineHeight: 26
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
        backgroundColor:'#bcf879',
        color: '#e90404'
    },
});