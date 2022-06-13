import {ref} from "vue";

const dragAndDrop = (acceptsTab: string[], handleFunction: (event: DataTransfer) => any) => {
	const accepts = ref(new Array<string>());
	accepts.value = acceptsTab;
	
	let counterHandler = 0;
	const isHover = ref(false);
	
	const dragEnterHandler = () => {
		counterHandler++;
		isHover.value = true;
	};
	
	const dragLeaveHandler = () => {
		counterHandler--;
		if (counterHandler === 0) {
            isHover.value = false;
        }
	};
	
	const dropHandler = async (event: DragEvent) => {
		counterHandler = 0;
		isHover.value = false;
		if (event.dataTransfer) {
			handleFunction(event.dataTransfer);
		}
	};
	
	const checkFile = (file: File): boolean => {
		let foundType = false;
		for (let i = 0; i < accepts.value.length && !foundType; ++i) {
			const acceptType = accepts.value[i];
			if (acceptType === 'audio/*' || acceptType === 'video/*' || acceptType === 'image/*') {
				if (file.type.match(acceptType.substring(0, acceptType.length - 2))) {
                    foundType = true;
                }
			} else if (acceptType.match(/\..+/)) {
				if (file.name.endsWith(acceptType)) {
                    foundType = true;
                }
			} else {
				if (file.type === acceptType) {
                    foundType = true;
                }
			}
		}
		return foundType;
	};
	
	return{
		accepts,
		isHover,
		dragEnterHandler,
		dragLeaveHandler,
		checkFile,
		dropHandler
	}
};

export{
	dragAndDrop
}