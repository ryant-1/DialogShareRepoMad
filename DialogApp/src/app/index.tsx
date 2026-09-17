import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
} from "react-native-paper";

//You have to install an Icon library if you are using <Dialog.Icon icon="???"/>
//- @expo/vector-icons
//- @react-native-vector-icons/material-design-icons
//- react-native-vector-icons

export default function Index() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <PaperProvider>
      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Icon icon="chat-alert" color="black" size={30} />
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
              {/* You must give the Dialog.ScrollArea a height in order for it to scroll */}
              <Dialog.ScrollArea style={{ height: 200 }}>
                <ScrollView>
                  <Text
                    style={{
                      fontFamily: "Times new roman",
                      color: "purple",
                      fontSize: 30,
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem eius enim sed in voluptates temporibus aperiam
                    laudantium quia. Quis eaque consectetur reprehenderit
                    expedita numquam dolorum amet. Sint minus delectus eius?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat ipsa minima similique, enim laboriosam quasi quod
                    nisi eaque, aliquid nobis sunt veritatis deleniti neque ut.
                    Reprehenderit eaque possimus quo. Beatae.
                  </Text>
                </ScrollView>
              </Dialog.ScrollArea>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
