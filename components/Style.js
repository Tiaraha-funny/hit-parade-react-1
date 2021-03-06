import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

const SongPreviewContainer = styled.div`
	display: grid;
	grid-template-columns: 500px;
	gap: 20px;
`;

export const SongPreview = styled.div`
	background: #272343;
	padding: 2rem;
	color: white;
	h3 {
		margin: 0;
		font-size: 1.4rem;
	}
`;

 function Style({ songs }) {
	const { styleName } = useParams();

	function createSongTemplate(song) {
		return (
			<Link to={`/song/${song.id}`} key={song.id}>
				<SongPreview>
					<h3>{song.title}</h3>
					<h4>{song.artist}</h4>
				</SongPreview>
			</Link>
		);
	}

	function showSongsFilteredByStyle() {
		const filteredSongs = songs
			.filter(song => song.style === styleName)
			.map(createSongTemplate);
		if (filteredSongs.length === 0) {
			return <p>No results.</p>;
		}
		return filteredSongs;
	}

	return (
		<div>
			<h1>Style</h1>
			<SongPreviewContainer>{showSongsFilteredByStyle()}</SongPreviewContainer>
		</div>
	);
}

export default connect((state) => ({
	songs: state.songsReducer,
	style: state.stylesReducers
}))(Style)
