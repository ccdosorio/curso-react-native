import {FlatList, Text, View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
}

export const HorizontalCarousel = ({movies, title}: Props) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        // onScroll={ onScroll }
      />
    </View>
  );
};