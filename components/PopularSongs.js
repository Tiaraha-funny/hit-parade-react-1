import React, { useContext, useEffect } from "react";
import SongItem from "./SongItem";
import styled from "styled-components";
import { setSongs } from "../Action";
import { connect, useDispatch } from "react-redux";

const SongsContainer = styled.ul`
  display: grid;
  grid-template-columns: 500px;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

function PopularSongs({ songs }) {
  const dispatch = useDispatch();

  useEffect(() => { 
    localStorage.setItem("songs", JSON.stringify(songs));
  }, [songs]);

  useEffect(() => {
    dispatch(setSongs());
  }, []);

  function sortSongsByPopularity(songA, songB) {
    const ratioA = songA.upvotes - songA.downvotes;
    const ratioB = songB.upvotes - songB.downvotes;
    return ratioB - ratioA;
  }

  function showSongsList() {
    if (!songs) return;
    const songsList = songs
      .sort(sortSongsByPopularity)
      .map((song) => <SongItem key={song.id} song={song}></SongItem>);
    return songsList;
  }

  return (
    <div>
      <h1>Popular Songs</h1>
      <SongsContainer>{showSongsList()}</SongsContainer>
    </div>
  );
}

export default connect(
  (state) => ({
    songs: state.songsReducer,
  }),
  null
)(PopularSongs);
