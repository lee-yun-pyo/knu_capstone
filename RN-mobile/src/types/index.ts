export type RootStackParamList = {
    Home: undefined;
    Detail: {
        info: {
            board_id: number;
            store_name: string;
            store_location: string;
            product_name: string;
            product_description: string;
            current_price: number;
            upper_limit: number;
            lower_limit: number;
            like_count: number;
            start_time: string;
            end_time: string;
            product_image: string[];
            latitude: number,
            longitude: number,
        };
    };
    Map: {
        latitude: number;
        longitude: number;
        storeName: string;
    };
};