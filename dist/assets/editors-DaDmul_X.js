import{u as m,S as f,T as b,P as k,U as v,E as V,_}from"./TiptapEditor-BkDysBIZ.js";import{_ as p,c as u,o as c,i as x,a as o,w as t,j as l,f as A,d as w}from"./index-BGIMdqyN.js";import{V as n}from"./VChip-BZnN8JqM.js";import{V as E}from"./VDivider-B1B4kDZB.js";import{_ as B}from"./AppCardCode-C-zO1RUn.js";import{V as H,a as C}from"./VRow-BFNCnCWI.js";import"./VSlideGroup-C-0uVn6B.js";import"./VAvatar-CYJWVBhL.js";import"./VImg-nOKaZD-s.js";import"./vue3-perfect-scrollbar-DVnAFAVf.js";import"./VCard-CF2BClSY.js";import"./VCardText-DfrFZhA0.js";/* empty css              */const S={__name:"DemoEditorCustomEditor",setup(a,{expose:e}){e();const i={editor:m({content:`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      `,extensions:[f,b.configure({types:["heading","paragraph"]}),k.configure({placeholder:"Write something here..."}),v]}),get Placeholder(){return k},get TextAlign(){return b},get Underline(){return v},get StarterKit(){return f},get EditorContent(){return V},get useEditor(){return m}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},I={class:"border pa-2 rounded custom-editor"},T={key:0,class:"d-flex flex-wrap gap-x-4 gap-y-2 mb-2"};function q(a,e,d,i,g,h){return c(),u("div",I,[i.editor?(c(),u("div",T,[o(n,{disabled:!i.editor.can().chain().focus().toggleBold().run(),color:i.editor.isActive("bold")?"primary":"",onClick:e[0]||(e[0]=r=>i.editor.chain().focus().toggleBold().run())},{default:t(()=>e[21]||(e[21]=[l(" bold ")])),_:1,__:[21]},8,["disabled","color"]),o(n,{disabled:!i.editor.can().chain().focus().toggleItalic().run(),color:i.editor.isActive("italic")?"primary":"",onClick:e[1]||(e[1]=r=>i.editor.chain().focus().toggleItalic().run())},{default:t(()=>e[22]||(e[22]=[l(" italic ")])),_:1,__:[22]},8,["disabled","color"]),o(n,{disabled:!i.editor.can().chain().focus().toggleStrike().run(),color:i.editor.isActive("strike")?"primary":"",onClick:e[2]||(e[2]=r=>i.editor.chain().focus().toggleStrike().run())},{default:t(()=>e[23]||(e[23]=[l(" strike ")])),_:1,__:[23]},8,["disabled","color"]),o(n,{disabled:!i.editor.can().chain().focus().toggleCode().run(),color:i.editor.isActive("code")?"primary":"",onClick:e[3]||(e[3]=r=>i.editor.chain().focus().toggleCode().run())},{default:t(()=>e[24]||(e[24]=[l(" code ")])),_:1,__:[24]},8,["disabled","color"]),o(n,{onClick:e[4]||(e[4]=r=>i.editor.chain().focus().unsetAllMarks().run())},{default:t(()=>e[25]||(e[25]=[l(" clear marks ")])),_:1,__:[25]}),o(n,{onClick:e[5]||(e[5]=r=>i.editor.chain().focus().clearNodes().run())},{default:t(()=>e[26]||(e[26]=[l(" clear nodes ")])),_:1,__:[26]}),o(n,{color:i.editor.isActive("paragraph")?"primary":"",onClick:e[6]||(e[6]=r=>i.editor.chain().focus().setParagraph().run())},{default:t(()=>e[27]||(e[27]=[l(" paragraph ")])),_:1,__:[27]},8,["color"]),o(n,{color:i.editor.isActive("heading",{level:1})?"primary":"",onClick:e[7]||(e[7]=r=>i.editor.chain().focus().toggleHeading({level:1}).run())},{default:t(()=>e[28]||(e[28]=[l(" h1 ")])),_:1,__:[28]},8,["color"]),o(n,{color:i.editor.isActive("heading",{level:2})?"primary":"",onClick:e[8]||(e[8]=r=>i.editor.chain().focus().toggleHeading({level:2}).run())},{default:t(()=>e[29]||(e[29]=[l(" h2 ")])),_:1,__:[29]},8,["color"]),o(n,{color:i.editor.isActive("heading",{level:3})?"primary":"",onClick:e[9]||(e[9]=r=>i.editor.chain().focus().toggleHeading({level:3}).run())},{default:t(()=>e[30]||(e[30]=[l(" h3 ")])),_:1,__:[30]},8,["color"]),o(n,{color:i.editor.isActive("heading",{level:4})?"primary":"",onClick:e[10]||(e[10]=r=>i.editor.chain().focus().toggleHeading({level:4}).run())},{default:t(()=>e[31]||(e[31]=[l(" h4 ")])),_:1,__:[31]},8,["color"]),o(n,{color:i.editor.isActive("heading",{level:5})?"primary":"",onClick:e[11]||(e[11]=r=>i.editor.chain().focus().toggleHeading({level:5}).run())},{default:t(()=>e[32]||(e[32]=[l(" h5 ")])),_:1,__:[32]},8,["color"]),o(n,{color:i.editor.isActive("heading",{level:6})?"primary":"",onClick:e[12]||(e[12]=r=>i.editor.chain().focus().toggleHeading({level:6}).run())},{default:t(()=>e[33]||(e[33]=[l(" h6 ")])),_:1,__:[33]},8,["color"]),o(n,{color:i.editor.isActive("bulletList")?"primary":"",onClick:e[13]||(e[13]=r=>i.editor.chain().focus().toggleBulletList().run())},{default:t(()=>e[34]||(e[34]=[l(" bullet list ")])),_:1,__:[34]},8,["color"]),o(n,{color:i.editor.isActive("orderedList")?"primary":"",onClick:e[14]||(e[14]=r=>i.editor.chain().focus().toggleOrderedList().run())},{default:t(()=>e[35]||(e[35]=[l(" ordered list ")])),_:1,__:[35]},8,["color"]),o(n,{color:i.editor.isActive("codeBlock")?"primary":"",onClick:e[15]||(e[15]=r=>i.editor.chain().focus().toggleCodeBlock().run())},{default:t(()=>e[36]||(e[36]=[l(" code block ")])),_:1,__:[36]},8,["color"]),o(n,{color:i.editor.isActive("blockquote")?"primary":"",onClick:e[16]||(e[16]=r=>i.editor.chain().focus().toggleBlockquote().run())},{default:t(()=>e[37]||(e[37]=[l(" blockquote ")])),_:1,__:[37]},8,["color"]),o(n,{onClick:e[17]||(e[17]=r=>i.editor.chain().focus().setHorizontalRule().run())},{default:t(()=>e[38]||(e[38]=[l(" horizontal rule ")])),_:1,__:[38]}),o(n,{onClick:e[18]||(e[18]=r=>i.editor.chain().focus().setHardBreak().run())},{default:t(()=>e[39]||(e[39]=[l(" hard break ")])),_:1,__:[39]}),o(n,{disabled:!i.editor.can().chain().focus().undo().run(),onClick:e[19]||(e[19]=r=>i.editor.chain().focus().undo().run())},{default:t(()=>e[40]||(e[40]=[l(" undo ")])),_:1,__:[40]},8,["disabled"]),o(n,{disabled:!i.editor.can().chain().focus().redo().run(),onClick:e[20]||(e[20]=r=>i.editor.chain().focus().redo().run())},{default:t(()=>e[41]||(e[41]=[l(" redo ")])),_:1,__:[41]},8,["disabled"])])):x("",!0),o(E,{class:"my-4"}),o(i.EditorContent,{editor:i.editor},null,8,["editor"])])}const z=p(S,[["render",q],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/editor/DemoEditorCustomEditor.vue"]]),P={__name:"DemoEditorBasicEditor",setup(a,{expose:e}){e();const i={basicEditorContent:A(`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
`)};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function L(a,e,d,i,g,h){const r=_;return c(),u("div",null,[o(r,{modelValue:i.basicEditorContent,"onUpdate:modelValue":e[0]||(e[0]=s=>i.basicEditorContent=s),class:"border rounded basic-editor"},null,8,["modelValue"])])}const D=p(P,[["render",L],["__file","E:/wamp64/www/sales/frontend/src/views/demos/forms/form-elements/editor/DemoEditorBasicEditor.vue"]]),M={ts:`<script setup lang="ts">
const basicEditorContent = ref(\`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
\`)
<\/script>

<template>
  <div>
    <TiptapEditor
      v-model="basicEditorContent"
      class="border rounded basic-editor"
    />
  </div>
</template>

<style lang="scss">
.basic-editor {
  .ProseMirror {
    block-size: 200px;
    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;
  }
}
</style>
`,js:`<script setup>
const basicEditorContent = ref(\`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
\`)
<\/script>

<template>
  <div>
    <TiptapEditor
      v-model="basicEditorContent"
      class="border rounded basic-editor"
    />
  </div>
</template>

<style lang="scss">
.basic-editor {
  .ProseMirror {
    block-size: 200px;
    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;
  }
}
</style>
`},U={ts:`<script setup lang="ts">
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'

const editor = useEditor({
  content: \`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      \`,
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Placeholder.configure({
      placeholder: 'Write something here...',
    }),
    Underline,
  ],
})
<\/script>

<template>
  <div class="border pa-2 rounded custom-editor">
    <div
      v-if="editor"
      class="d-flex flex-wrap gap-x-4 gap-y-2 mb-2"
    >
      <VChip
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :color="editor.isActive('bold') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBold().run()"
      >
        bold
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :color="editor.isActive('italic') ? 'primary' : ''"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        italic
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :color="editor.isActive('strike') ? 'primary' : ''"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        strike
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :color="editor.isActive('code') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCode().run()"
      >
        code
      </VChip>

      <VChip @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </VChip>

      <VChip @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </VChip>

      <VChip
        :color="editor.isActive('paragraph') ? 'primary' : ''"
        @click="editor.chain().focus().setParagraph().run()"
      >
        paragraph
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 1 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        h1
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 2 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        h2
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 3 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        h3
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 4 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      >
        h4
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 5 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      >
        h5
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 6 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      >
        h6
      </VChip>

      <VChip
        :color="editor.isActive('bulletList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        bullet list
      </VChip>

      <VChip
        :color="editor.isActive('orderedList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        ordered list
      </VChip>

      <VChip
        :color="editor.isActive('codeBlock') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      >
        code block
      </VChip>

      <VChip
        :color="editor.isActive('blockquote') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        blockquote
      </VChip>

      <VChip @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </VChip>

      <VChip @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().undo().run()"
        @click="editor.chain().focus().undo().run()"
      >
        undo
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().redo().run()"
        @click="editor.chain().focus().redo().run()"
      >
        redo
      </VChip>
    </div>
    <VDivider class="my-4" />
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
/* Basic editor styles */

.custom-editor {
  .ProseMirror {
    > * + * {
      margin-block-start: 0.75em;
    }

    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;

    ul,
    ol {
      padding-block: 0;
      padding-inline: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      border-radius: 0.5rem;
      background: #0d0d0d;
      color: #fff;
      font-family: JetBrainsMono, monospace;
      padding-block: 0.75rem;
      padding-inline: 1rem;

      code {
        padding: 0;
        background: none;
        color: inherit;
        font-size: 0.8rem;
      }
    }

    img {
      block-size: auto;
      max-inline-size: 100%;
    }

    blockquote {
      border-inline-start: 2px solid rgba(#0d0d0d, 0.1);
      padding-inline-start: 1rem;
    }

    hr {
      border: none;
      border-block-start: 2px solid rgba(#0d0d0d, 0.1);
      margin-block: 2rem;
      margin-inline: 0;
    }
  }
}
</style>
`,js:`<script setup>
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import {
  EditorContent,
  useEditor,
} from '@tiptap/vue-3'

const editor = useEditor({
  content: \`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      \`,
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: [
        'heading',
        'paragraph',
      ],
    }),
    Placeholder.configure({ placeholder: 'Write something here...' }),
    Underline,
  ],
})
<\/script>

<template>
  <div class="border pa-2 rounded custom-editor">
    <div
      v-if="editor"
      class="d-flex flex-wrap gap-x-4 gap-y-2 mb-2"
    >
      <VChip
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :color="editor.isActive('bold') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBold().run()"
      >
        bold
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :color="editor.isActive('italic') ? 'primary' : ''"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        italic
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :color="editor.isActive('strike') ? 'primary' : ''"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        strike
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :color="editor.isActive('code') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCode().run()"
      >
        code
      </VChip>

      <VChip @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </VChip>

      <VChip @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </VChip>

      <VChip
        :color="editor.isActive('paragraph') ? 'primary' : ''"
        @click="editor.chain().focus().setParagraph().run()"
      >
        paragraph
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 1 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        h1
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 2 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        h2
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 3 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        h3
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 4 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      >
        h4
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 5 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      >
        h5
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 6 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      >
        h6
      </VChip>

      <VChip
        :color="editor.isActive('bulletList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        bullet list
      </VChip>

      <VChip
        :color="editor.isActive('orderedList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        ordered list
      </VChip>

      <VChip
        :color="editor.isActive('codeBlock') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      >
        code block
      </VChip>

      <VChip
        :color="editor.isActive('blockquote') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        blockquote
      </VChip>

      <VChip @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </VChip>

      <VChip @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().undo().run()"
        @click="editor.chain().focus().undo().run()"
      >
        undo
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().redo().run()"
        @click="editor.chain().focus().redo().run()"
      >
        redo
      </VChip>
    </div>
    <VDivider class="my-4" />
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
/* Basic editor styles */

.custom-editor {
  .ProseMirror {
    > * + * {
      margin-block-start: 0.75em;
    }

    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;

    ul,
    ol {
      padding-block: 0;
      padding-inline: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      border-radius: 0.5rem;
      background: #0d0d0d;
      color: #fff;
      font-family: JetBrainsMono, monospace;
      padding-block: 0.75rem;
      padding-inline: 1rem;

      code {
        padding: 0;
        background: none;
        color: inherit;
        font-size: 0.8rem;
      }
    }

    img {
      block-size: auto;
      max-inline-size: 100%;
    }

    blockquote {
      border-inline-start: 2px solid rgba(#0d0d0d, 0.1);
      padding-inline-start: 1rem;
    }

    hr {
      border: none;
      border-block-start: 2px solid rgba(#0d0d0d, 0.1);
      margin-block: 2rem;
      margin-inline: 0;
    }
  }
}
</style>
`},j={__name:"editors",setup(a,{expose:e}){e();const d={get basicEditor(){return M},get customEditor(){return U}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function G(a,e,d,i,g,h){const r=D,s=B,y=z;return c(),w(H,null,{default:t(()=>[o(C,{cols:"12"},{default:t(()=>[o(s,{title:"Basic Editor",code:i.basicEditor},{default:t(()=>[o(r)]),_:1},8,["code"])]),_:1}),o(C,{cols:"12"},{default:t(()=>[o(s,{title:"Custom Editor",code:i.customEditor},{default:t(()=>[o(y)]),_:1},8,["code"])]),_:1})]),_:1})}const ie=p(j,[["render",G],["__file","E:/wamp64/www/sales/frontend/src/pages/forms/editors.vue"]]);export{ie as default};
