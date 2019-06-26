import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const CardComponent = () => (
  <Card style={styles.cardContainer}>
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={props => <Avatar.Icon {...props} icon="folder" />}
    />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15
  }
});

export default CardComponent;
