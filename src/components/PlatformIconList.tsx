import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Text, Icon, HStack } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons/lib/esm/iconBase";

interface Props {
	platforms: Platform[];
}

export default function PlatformIconList({ platforms }: Props) {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		ios: MdPhoneIphone,
		web: BsGlobe,
		android: FaAndroid,
	};
	return (
		<HStack marginY={"10px"}>
			{platforms.map((platform) => (
				<Icon as={iconMap[platform.slug]} key={platform.id} color="gray.500" />
			))}
		</HStack>
	);
}
