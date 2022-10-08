# Minecraft RGB Redstone Lamp Display Emulator
## Quick website for converting images to Minecraft redstone lamps with stained glass infront.
Some time ago I experimented with making 8 color rgb display in Minecraft by putting stained glass infront of redstone lamps and it worked relatively well for 3x3 pixel size. Here is a demo version schematic download [link](https://cdn.discordapp.com/attachments/397060100008706048/1028267355110907955/RGB_Matrix_Display.schematic). Sinze it's pretty time consuming to test different images/pixel forms in Minecraft I made this tool.

![2022-09-04_22 38 29](https://user-images.githubusercontent.com/103208695/194705099-b2578fe6-3bd6-40c1-b75e-20100308d249.png)  

![2022-09-05_01 54 52](https://user-images.githubusercontent.com/103208695/194705067-bd1348ef-870b-459e-b0c8-d3c351e8531c.png)  

You have 3 options what lamp texturepack to use, they are different sizes so you can choose size of a final image. 16x16 seems to be working best:
- [4x4](https://www.planetminecraft.com/texture-pack/kapteyn-s-4x4-mania/) by kapteyn and glass by me
- [8x8](https://rodrigo-al.jimdo.com/texture-packs/8x8-rodrigo-s-pack/) Rodrigo's Pack
- 16x16 Default Minecraft 1.11-1.12 texture

Here are some random output examples:  
16x16 / Art by [sexypixelize](https://sexypixelize.newgrounds.com/art)  
![image](https://user-images.githubusercontent.com/103208695/194705516-e8768286-7eae-4963-9b6c-305885c5a9c2.png)

16x16 / Packman of course
![image](https://user-images.githubusercontent.com/103208695/194705522-34fc296e-010b-4cf5-9734-e797755f16b3.png)

16x16 / Fruits by [CrystalOfLies](https://www.reddit.com/r/PixelArt/comments/aon3z2/oc_i_created_some_32x32_fruit_sprites_source_link/)
![image](https://user-images.githubusercontent.com/103208695/194705527-6e24b2f9-7ae7-4d5a-8af4-f93023832a78.png)

8x8 / I had to try Minecraft itself to see how well we can emulate it's graphics in the future generations of in-game computers  
![image](https://user-images.githubusercontent.com/103208695/194705531-f4ccbd5d-8b83-45a8-b310-7f568fd0696c.png)

## How to launch yourself using [Node.js](https://nodejs.org/en/) and [Visual Studio Code](https://code.visualstudio.com/download)

```bash
# install yarn
npm install --global yarn

# now install all modules
yarn

# now start project
yarn dev
```

## License
This program is licensed under the GPL-3.0 License. Please read the License file to know about the usage terms and conditions.
