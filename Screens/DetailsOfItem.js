import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from '../Components/Header';

const DetailsOfItem = ({ navigation }) => {
  const details = navigation.getParam('data');

  //   const details = {
  //     objectID: 384580,
  //     isHighlight: false,
  //     accessionNumber: '17.3.703',
  //     accessionYear: '1917',
  //     isPublicDomain: true,
  //     primaryImage:
  //       'https://images.metmuseum.org/CRDImages/dp/original/DP878420.jpg',
  //     primaryImageSmall:
  //       'https://images.metmuseum.org/CRDImages/dp/web-large/DP878420.jpg',
  //     additionalImages: [],
  //     constituents: [
  //       {
  //         constituentID: 162786,
  //         role: 'Artist',
  //         name: 'Anders Zorn',
  //         constituentULAN_URL: 'http://vocab.getty.edu/page/ulan/500002927',
  //         constituentWikidata_URL: 'https://www.wikidata.org/wiki/Q206820',
  //         gender: '',
  //       },
  //     ],
  //     department: 'Drawings and Prints',
  //     objectName: 'Print',
  //     title: 'Mona',
  //     culture: '',
  //     period: '',
  //     dynasty: '',
  //     reign: '',
  //     portfolio: '',
  //     artistRole: 'Artist',
  //     artistPrefix: '',
  //     artistDisplayName: 'Anders Zorn',
  //     artistDisplayBio: 'Swedish, Mora 1860–1920 Mora',
  //     artistSuffix: '',
  //     artistAlphaSort: 'Zorn, Anders',
  //     artistNationality: 'Swedish',
  //     artistBeginDate: '1860',
  //     artistEndDate: '1920',
  //     artistGender: '',
  //     artistWikidata_URL: 'https://www.wikidata.org/wiki/Q206820',
  //     artistULAN_URL: 'http://vocab.getty.edu/page/ulan/500002927',
  //     objectDate: '1911',
  //     objectBeginDate: 1911,
  //     objectEndDate: 1911,
  //     medium: 'Etching; third state of three',
  //     dimensions:
  //       'Plate: 9 3/4 × 6 15/16 in. (24.8 × 17.7 cm)\r\nSheet: 14 9/16 × 11 5/8 in. (37 × 29.5 cm)',
  //     measurements: [
  //       {
  //         elementName: 'Plate',
  //         elementDescription: null,
  //         elementMeasurements: {
  //           Height: 24.8,
  //           Width: 17.7,
  //         },
  //       },
  //       {
  //         elementName: 'Sheet',
  //         elementDescription: null,
  //         elementMeasurements: {
  //           Height: 37,
  //           Width: 29.5,
  //         },
  //       },
  //     ],
  //     creditLine: 'Harris Brisbane Dick Fund, 1917',
  //     geographyType: '',
  //     city: '',
  //     state: '',
  //     county: '',
  //     country: '',
  //     region: '',
  //     subregion: '',
  //     locale: '',
  //     locus: '',
  //     excavation: '',
  //     river: '',
  //     classification: 'Prints',
  //     rightsAndReproduction: '',
  //     linkResource: '',
  //     metadataDate: '2021-08-20T04:36:13.79Z',
  //     repository: 'Metropolitan Museum of Art, New York, NY',
  //     objectURL: 'https://www.metmuseum.org/art/collection/search/384580',
  //     tags: [
  //       {
  //         term: 'Portraits',
  //         AAT_URL: 'http://vocab.getty.edu/page/aat/300015637',
  //         Wikidata_URL: 'https://www.wikidata.org/wiki/Q134307',
  //       },
  //       {
  //         term: 'Women',
  //         AAT_URL: 'http://vocab.getty.edu/page/aat/300025943',
  //         Wikidata_URL: 'https://www.wikidata.org/wiki/Q467',
  //       },
  //     ],
  //     objectWikidata_URL: '',
  //     isTimelineWork: false,
  //     GalleryNumber: '',
  //   };
  return (
    <View style={styles.mainContainer}>
      <Header></Header>
      <View style={{ padding: 10, paddingTop: 40 }}>
        <Image
          resizeMode='contain'
          style={styles.image}
          source={{
            uri: `${details.primaryImage}`,
          }}
        />
        <Text style={styles.title}>{details.title}</Text>
        <Text style={{ flex: 1, textAlign: 'right' }}>
          <Image
            style={styles.icon}
            source={require('../assets/Location Icon.png')}
          />
          <Text style={styles.location}>{details.repository}</Text>
        </Text>
        <Text style={styles.Category}>Artist Details</Text>
        <Text style={styles.SubCategory}>
          Name: {details.artistDisplayName}
        </Text>
        <Text style={styles.SubCategory}>
          Nationality: {details.artistNationality}
        </Text>
        <Text style={styles.SubCategory}>
          Born Year: {details.artistBeginDate}
        </Text>
        <Text style={styles.SubCategory}>
          Died Year: {details.artistEndDate}
        </Text>

        <Text style={styles.Category}>Painting measurements</Text>
        <Text style={styles.SubCategory}>{details.dimensions}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Roboto',
    fontWeight: '400',
    textAlign: 'center',
  },
  location: {
    paddingTop: 0,
    fontSize: 15,
    fontWeight: '200',
  },
  icon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  Category: {
    paddingTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  SubCategory: {
    padding: 2,
    fontSize: 18,
    fontWeight: '400',
  },
});
export default DetailsOfItem;
