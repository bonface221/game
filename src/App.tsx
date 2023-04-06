import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
	const [genre, setGenre] = useState<Genre | null>(null);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 3fr",
			}}
		>
			<GridItem area="nav">
				<Navbar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" padding={5}>
					<GenreList
						selectedGenre={genre}
						onSelectGenre={(genre) => setGenre(genre)}
					/>
				</GridItem>
			</Show>

			<GridItem area="main">
				<PlatformSelector />
				<GameGrid selectedGenre={genre} />
			</GridItem>
		</Grid>
	);
}

export default App;
