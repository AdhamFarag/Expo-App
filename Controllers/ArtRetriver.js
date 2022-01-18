import React from 'react'
import { View, Text } from 'react-native'

const ArtRetriver = () => {
    const Search = async () => {
        const resp = await fetch("https://api.sampleapis.com/coffee/hot");
        const data = await resp.json();
      };
}

export default ArtRetriver
