"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.3.0",
    "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id        String   @id @default(cuid())\n  email     String   @unique\n  username  String   @unique\n  password  String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  reviews    Review[]\n  bookStatus UserBookStatus[]\n\n  @@map(\"users\")\n}\n\nmodel Book {\n  id          String    @id @default(cuid())\n  title       String    @db.VarChar(255)\n  author      String    @db.VarChar(255)\n  description String?   @db.Text\n  coverUrl    String?\n  isbn        String?   @unique\n  publishedAt DateTime?\n  createdAt   DateTime  @default(now())\n  updatedAt   DateTime  @updatedAt\n\n  // Relations\n  reviews    Review[]\n  userStatus UserBookStatus[]\n\n  @@map(\"books\")\n}\n\nmodel UserBookStatus {\n  id        String     @id @default(cuid())\n  userId    String\n  bookId    String\n  status    BookStatus @default(WANT_TO_READ)\n  createdAt DateTime   @default(now())\n  updatedAt DateTime   @updatedAt\n\n  // Relations\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n  book Book @relation(fields: [bookId], references: [id], onDelete: Cascade)\n\n  @@unique([userId, bookId])\n  @@map(\"user_book_status\")\n}\n\nmodel Review {\n  id         String   @id @default(cuid())\n  userId     String\n  bookId     String\n  rating     Int      @db.SmallInt\n  reviewText String?  @db.Text\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  // Relations\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n  book Book @relation(fields: [bookId], references: [id], onDelete: Cascade)\n\n  @@unique([userId, bookId])\n  @@map(\"reviews\")\n}\n\nenum BookStatus {\n  WANT_TO_READ\n  READING\n  READ\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"reviews\",\"kind\":\"object\",\"type\":\"Review\",\"relationName\":\"ReviewToUser\"},{\"name\":\"bookStatus\",\"kind\":\"object\",\"type\":\"UserBookStatus\",\"relationName\":\"UserToUserBookStatus\"}],\"dbName\":\"users\"},\"Book\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"author\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"coverUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isbn\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"publishedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"reviews\",\"kind\":\"object\",\"type\":\"Review\",\"relationName\":\"BookToReview\"},{\"name\":\"userStatus\",\"kind\":\"object\",\"type\":\"UserBookStatus\",\"relationName\":\"BookToUserBookStatus\"}],\"dbName\":\"books\"},\"UserBookStatus\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bookId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"BookStatus\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToUserBookStatus\"},{\"name\":\"book\",\"kind\":\"object\",\"type\":\"Book\",\"relationName\":\"BookToUserBookStatus\"}],\"dbName\":\"user_book_status\"},\"Review\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bookId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rating\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"reviewText\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ReviewToUser\"},{\"name\":\"book\",\"kind\":\"object\",\"type\":\"Book\",\"relationName\":\"BookToReview\"}],\"dbName\":\"reviews\"}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map