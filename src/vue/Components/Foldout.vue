<template>
    <div :class="{open:open,'first-open':firstOpen}" class="foldout-container">
        <translate tag="div" class="foldout-title" :icon="open ? 'minus':'plus'" @click="toggleContent" :say="title"/>
        <div class="foldout-content" :style="contentStyle">
            <slot/>
        </div>
    </div>
</template>

<script>
    import Translate from '@vc/Translate.vue';

    export default {
        components: {
            Translate
        },

        props: {
            title        : {
                type     : String,
                'default': 'More Options'
            },
            initiallyOpen: {
                type     : Boolean,
                'default': false
            }
        },

        data() {
            return {
                observer : null,
                maxHeight: 0,
                open     : false,
                firstOpen: true
            };
        },

        mounted() {
            if(this.initiallyOpen) this.open = true;
            this.observer = new MutationObserver(() => {this.maxHeight = this.$slots.default[0].elm.offsetHeight;});
            this.observer.observe(this.$el.querySelector('.foldout-content'), {childList: true, subtree: true});
        },

        beforeDestroy: function() {
            this.observer.disconnect();
        },

        computed: {
            contentStyle() {
                if(this.open) {
                    let $el = this.$slots.default[0].elm;
                    if($el) this.maxHeight = $el.offsetHeight +1 ;
                } else {
                    this.maxHeight = 0;
                }

                return {maxHeight: `${this.maxHeight.toString()}px`};
            }
        },

        methods: {
            toggleContent() {
                this.open = !this.open;
                this.firstOpen = false;
            }
        }
    };
</script>

<style lang="scss">
    .foldout-container {
        .foldout-title {
            cursor    : pointer;
            font-size : 1.1rem;
            padding   : 0 0 0.25rem 0;

            span {
                cursor : pointer;
            }
        }

        .foldout-content {
            max-height : 0;
            overflow   : hidden;
            transition : max-height 0.25s ease-in-out;
        }

        &.first-open .foldout-content {
            transition : none;
        }
    }
</style>