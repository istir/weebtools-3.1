import { Box, VStack } from "@chakra-ui/layout";
import { CheckboxGroup } from "@chakra-ui/react";
import React from "react";
import { Post, Tag } from "../../types";
import TagComponent from "./TagComponent";
import TagPickerFunctionWrapper from "./TagPickerFunctionWrapper";
interface TagPickerProps {
  tags: Tag[];
  picked?: Post;
  updatePost?: (post: Post) => void;
  colorScheme: string;
}

interface TagPickerState {
  checked?: string[];
}

export default class TagPicker extends React.Component<
  TagPickerProps,
  TagPickerState
> {
  //* default push prop tags to state checked, change it onChange, when props change change state to props
  constructor(props: TagPickerProps) {
    super(props);
    this.state = { checked: [] };
  }
  componentDidUpdate(prevProps: TagPickerProps) {
    if (
      this.props.picked?.tagIds &&
      prevProps.picked?.tagIds !== this.props.picked.tagIds
    ) {
      this.setState({
        checked: this.props.picked.tagIds.map((val) => val + ""),
      });
    }
  }
  render() {
    return (
      <CheckboxGroup
        value={this.state.checked}
        onChange={(e) => {
          if (this.props.picked) {
            this.setState({ checked: e as string[] });
            let filteredTags: number[] = [];
            e.forEach((val) => filteredTags.push(parseInt(val as string)));

            this.props.updatePost &&
              this.props.picked &&
              this.props.updatePost({
                id: this.props.picked.id,
                name: this.props.picked.name,
                folder: this.props.picked.folder,
                image: this.props.picked.image,
                tagIds: filteredTags,
              });
          }
        }}
      >
        <TagPickerFunctionWrapper
          tags={this.props.tags}
          valid={this.props.picked ? true : false}
          colorScheme={this.props.colorScheme}
        />
      </CheckboxGroup>
    );
  }
}
