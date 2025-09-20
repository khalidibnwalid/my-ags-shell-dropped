/// <reference path="./gtk-3.0.d.ts" />
/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./gdk-3.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./cairo.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />
/// <reference path="./atk-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://ValaPanel?version=24.03' {
    // Module dependencies
    import type Gtk from 'gi://Gtk?version=3.0';
    import type xlib from 'gi://xlib?version=2.0';
    import type Gdk from 'gi://Gdk?version=3.0';
    import type cairo from 'cairo';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type Atk from 'gi://Atk?version=1.0';

    export namespace ValaPanel {
        /**
         * ValaPanel-24.03
         */

        export namespace AppletPackType {
            export const $gtype: GObject.GType<AppletPackType>;
        }

        enum AppletPackType {
            START,
            END,
            CENTER,
        }

        export namespace ConfiguratorType {
            export const $gtype: GObject.GType<ConfiguratorType>;
        }

        enum ConfiguratorType {
            STR,
            INT,
            BOOL,
            FILE,
            FILE_ENTRY,
            DIRECTORY,
            DIRECTORY_ENTRY,
            TRIM,
        }

        export namespace Gravity {
            export const $gtype: GObject.GType<Gravity>;
        }

        enum Gravity {
            NORTH_LEFT,
            NORTH_CENTER,
            NORTH_RIGHT,
            SOUTH_LEFT,
            SOUTH_CENTER,
            SOUTH_RIGHT,
            WEST_UP,
            WEST_CENTER,
            WEST_DOWN,
            EAST_UP,
            EAST_CENTER,
            EAST_DOWN,
        }
        const APPLET_ACTION_ABOUT: string;
        const APPLET_ACTION_CONFIGURE: string;
        const APPLET_ACTION_REMOTE: string;
        const APPLET_ACTION_REMOVE: string;
        const APPLET_EXCLUSIVE: string;
        const APPLET_EXTENSION_POINT: string;
        const AUTOHIDE_GAP: number;
        const BASE_SCHEMA: string;
        const CORE_PATH_ELEM: string;
        const CORE_SCHEMA: string;
        const CORE_UNITS: string;
        const KEY_ACTION_GROUP: string;
        const KEY_AUTOHIDE: string;
        const KEY_BACKGROUND_COLOR: string;
        const KEY_BACKGROUND_FILE: string;
        const KEY_BACKGROUND_WIDGET: string;
        const KEY_CORNER_RADIUS: string;
        const KEY_DOCK: string;
        const KEY_DYNAMIC: string;
        const KEY_FONT: string;
        const KEY_FONT_SIZE: string;
        const KEY_FONT_SIZE_ONLY: string;
        const KEY_FOREGROUND_COLOR: string;
        const KEY_GRAVITY: string;
        const KEY_HEIGHT: string;
        const KEY_ICON_SIZE: string;
        const KEY_MARGIN: string;
        const KEY_MONITOR: string;
        const KEY_NAME: string;
        const KEY_ORIENTATION: string;
        const KEY_PACK: string;
        const KEY_POSITION: string;
        const KEY_SETTINGS: string;
        const KEY_SHOW_HIDDEN: string;
        const KEY_STRUT: string;
        const KEY_TOPLEVEL: string;
        const KEY_USE_BACKGROUND_COLOR: string;
        const KEY_USE_BACKGROUND_FILE: string;
        const KEY_USE_FONT: string;
        const KEY_USE_FOREGROUND_COLOR: string;
        const KEY_USE_TOOLBAR_APPEARANCE: string;
        const KEY_UUID: string;
        const KEY_WIDTH: string;
        const OBJECT_PATH: string;
        const OBJECT_PATH_TEMPLATE: string;
        const OBJECT_SCHEMA: string;
        const OBJECT_TYPE: string;
        const PLUGIN_SCHEMA: string;
        const TOPLEVEL_ID: string;
        const TOPLEVEL_SCHEMA: string;
        const TOPLEVEL_SCHEMA_ELEM: string;
        function activate_launch_command(action: Gio.SimpleAction, param: GLib.Variant, user_data?: any | null): void;
        function activate_launch_id(action: Gio.SimpleAction, param: GLib.Variant, user_data?: any | null): void;
        function activate_launch_uri(action: Gio.SimpleAction, param: GLib.Variant, user_data?: any | null): void;
        function add_gsettings_as_action(map: Gio.ActionMap, settings: Gio.Settings, prop: string): void;
        function add_prop_as_action(map: Gio.ActionMap, prop: string): void;
        function applet_info_duplicate(info?: any | null): AppletInfo;
        function applet_info_free(info?: any | null): void;
        function applet_info_load(extension_name: string, plugin_type: GObject.GType): AppletInfo;
        function apply_window_icon(win: Gtk.Window): void;
        function edge_from_gravity(gravity: Gravity | null): Gtk.PositionType;
        function generate_confirmation_dialog(parent: Gtk.Window, error: string): boolean;
        function generate_error_dialog(parent: Gtk.Window, error: string): void;
        /**
         * Generate configuration for specific keys and values without need to create a custom widget
         * @param settings a #GSettings
         * @param names names of config entries (shown in UI, should be translatable)
         * @param keys #GSettings keys of config entries (should be defined in provided schema)
         * @param types a #GenericConfigType of provided settings. External widgets is not supported in this version of function.
         * @returns a #GtkWidget for configuring an applet with provided GSettings
         */
        function generic_cfg_widget(
            settings: Gio.Settings,
            names: string[],
            keys: string[],
            types: ConfiguratorType[] | null,
        ): Gtk.Widget;
        function get_current_platform_name(): string;
        /**
         * Use it to get default #GAppInfo to handle a file or URI.
         * @param uri a URI to get default transfer from
         * @returns a #GAppInfo for handling a URI (desktop default)
         */
        function get_default_for_uri(uri: string): Gio.AppInfo | null;
        /**
         * Looks up in the enum table for the nick of `value`.
         *
         * 	Return value: The nick for the given value or #NULL on error
         * @param value The value of ValaPanelGravity to get the nick of
         */
        function gravity_get_nick(value: Gravity | null): string;
        /**
         * Looks up in the enum table for the value of `nick`.
         *
         * 	Return value: The value for the given `nick`
         * @param nick The enum nick to lookup
         */
        function gravity_get_value_from_nick(nick: string): Gravity;
        function launch(app_info: Gio.DesktopAppInfo, uris: string[] | null, parent: Gtk.Widget): boolean;
        /**
         * Allow you to launch an #GDesktopAppInfo with list of URIs and with provided #GAppLaunchContext. You
         * most likely will not want this, and use #vala_panel_launch instead.
         * @param app_info a #GDesktopAppInfo
         * @param cxt a #GAppLaunchContext for launching application
         * @param uris list of URI identifiers to passing to programs for launching
         * @returns true on successful launch, false otherwise.
         */
        function launch_with_context(
            app_info: Gio.DesktopAppInfo,
            cxt: Gio.AppLaunchContext,
            uris?: string[] | null,
        ): boolean;
        function monitor_num_from_mon(disp: Gdk.Display, mon: Gdk.Monitor): number;
        function orient_from_gravity(gravity: Gravity | null): Gtk.Orientation;
        function reset_schema(settings: Gio.Settings): void;
        function reset_schema_with_children(settings: Gio.Settings): void;
        function scale_button_set_range(b: Gtk.ScaleButton, lower: number, upper: number): void;
        function scale_button_set_value_labeled(b: Gtk.ScaleButton, value: number): void;
        function setup_button(b: Gtk.Button, img?: Gtk.Image | null, label?: string | null): void;
        function setup_icon(img: Gtk.Image, icon: Gio.Icon, top: GObject.Object | null, size: number): void;
        function setup_icon_button(btn: Gtk.Button, icon: Gio.Icon, label: string, top: GObject.Object): void;
        function setup_label(label: Gtk.Label, text: string, bold: boolean, factor: number): void;
        function spawn_setup_func(data?: any | null): void;
        function style_class_toggle(w: Gtk.Widget, klass: string, apply: boolean): void;
        function style_flat_button(widget: Gtk.Widget, direction: Gtk.PositionType | null): string;
        /**
         * Loads a CSS from file and apply it to all ValaPanel application (not to single toplevel)
         * @param file it is a filename for loading a style
         * @param priority it a priority, same as in #gtk_style_context_add_provider_for_screen
         * @returns a #GtkCssProvider from loaded file
         */
        function style_from_file(file: string, priority: number): Gtk.CssProvider;
        function style_from_res(widget: Gtk.Widget, file: string, klass: string): void;
        function style_set_class(widget: Gtk.Widget, css: string, klass: string, remove: boolean): void;
        function style_set_for_widget(w: Gtk.Widget, css: string): void;
        interface ListModelFilterFunc {
            (item?: any | null): boolean;
        }
        namespace Applet {
            // Signal signatures
            interface SignalSignatures extends Gtk.Bin.SignalSignatures {
                'notify::action-group': (pspec: GObject.ParamSpec) => void;
                'notify::background-widget': (pspec: GObject.ParamSpec) => void;
                'notify::settings': (pspec: GObject.ParamSpec) => void;
                'notify::toplevel': (pspec: GObject.ParamSpec) => void;
                'notify::uuid': (pspec: GObject.ParamSpec) => void;
                'notify::border-width': (pspec: GObject.ParamSpec) => void;
                'notify::child': (pspec: GObject.ParamSpec) => void;
                'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
                'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
                'notify::can-default': (pspec: GObject.ParamSpec) => void;
                'notify::can-focus': (pspec: GObject.ParamSpec) => void;
                'notify::composite-child': (pspec: GObject.ParamSpec) => void;
                'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
                'notify::events': (pspec: GObject.ParamSpec) => void;
                'notify::expand': (pspec: GObject.ParamSpec) => void;
                'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
                'notify::halign': (pspec: GObject.ParamSpec) => void;
                'notify::has-default': (pspec: GObject.ParamSpec) => void;
                'notify::has-focus': (pspec: GObject.ParamSpec) => void;
                'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
                'notify::height-request': (pspec: GObject.ParamSpec) => void;
                'notify::hexpand': (pspec: GObject.ParamSpec) => void;
                'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
                'notify::is-focus': (pspec: GObject.ParamSpec) => void;
                'notify::margin': (pspec: GObject.ParamSpec) => void;
                'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
                'notify::margin-end': (pspec: GObject.ParamSpec) => void;
                'notify::margin-left': (pspec: GObject.ParamSpec) => void;
                'notify::margin-right': (pspec: GObject.ParamSpec) => void;
                'notify::margin-start': (pspec: GObject.ParamSpec) => void;
                'notify::margin-top': (pspec: GObject.ParamSpec) => void;
                'notify::name': (pspec: GObject.ParamSpec) => void;
                'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
                'notify::opacity': (pspec: GObject.ParamSpec) => void;
                'notify::parent': (pspec: GObject.ParamSpec) => void;
                'notify::receives-default': (pspec: GObject.ParamSpec) => void;
                'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
                'notify::sensitive': (pspec: GObject.ParamSpec) => void;
                'notify::style': (pspec: GObject.ParamSpec) => void;
                'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
                'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
                'notify::valign': (pspec: GObject.ParamSpec) => void;
                'notify::vexpand': (pspec: GObject.ParamSpec) => void;
                'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
                'notify::visible': (pspec: GObject.ParamSpec) => void;
                'notify::width-request': (pspec: GObject.ParamSpec) => void;
                'notify::window': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Bin.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {
                action_group: Gio.SimpleActionGroup;
                actionGroup: Gio.SimpleActionGroup;
                background_widget: Gtk.Widget;
                backgroundWidget: Gtk.Widget;
                settings: Gio.Settings;
                toplevel: Toplevel;
                uuid: string;
            }
        }

        class Applet extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<Applet>;

            // Properties

            get action_group(): Gio.SimpleActionGroup;
            get actionGroup(): Gio.SimpleActionGroup;
            get background_widget(): Gtk.Widget;
            set background_widget(val: Gtk.Widget);
            get backgroundWidget(): Gtk.Widget;
            set backgroundWidget(val: Gtk.Widget);
            get settings(): Gio.Settings;
            get toplevel(): Toplevel;
            get uuid(): string;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Applet.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Applet.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Applet.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Applet.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Applet.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Applet.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Applet.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Applet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Virtual methods

            vfunc_get_settings_ui(): Gtk.Widget;
            vfunc_remote_command(command: string): boolean;
            vfunc_update_context_menu(parent_menu: Gio.Menu): Gio.Menu;

            // Methods

            get_action_group(): Gio.ActionMap;
            // Conflicted with Gtk.Widget.get_action_group
            get_action_group(...args: never[]): any;
            get_background_widget(): Gtk.Widget;
            get_settings(): Gio.Settings;
            // Conflicted with Gtk.Widget.get_settings
            get_settings(...args: never[]): any;
            get_settings_ui(): Gtk.Widget;
            get_toplevel(): Toplevel | null;
            // Conflicted with Gtk.Widget.get_toplevel
            get_toplevel(...args: never[]): any;
            get_uuid(): string;
            init_background(): void;
            is_configurable(): boolean;
            remote_command(command: string): boolean;
            set_background_widget(w: Gtk.Widget): void;
            show_config_dialog(): void;
            update_context_menu(parent_menu: Gio.Menu): Gio.Menu;

            // Inherited methods
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            /**
             * Gets a property of an object.
             *
             * The value can be:
             * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
             * - a GObject.Value initialized with the expected type of the property
             * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
             *
             * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
             *
             * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
             * @param property_name The name of the property to get
             * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
             */
            get_property(property_name: string, value: GObject.Value | any): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            /**
             * Sets a property on an object.
             * @param property_name The name of the property to set
             * @param value The value to set the property to
             */
            set_property(property_name: string, value: GObject.Value | any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
             * @param id Handler ID of the handler to be disconnected
             */
            disconnect(id: number): void;
            /**
             * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
             * @param properties Object containing the properties to set
             */
            set(properties: { [key: string]: any }): void;
            /**
             * Blocks a handler of an instance so it will not be called during any signal emissions
             * @param id Handler ID of the handler to be blocked
             */
            block_signal_handler(id: number): void;
            /**
             * Unblocks a handler so it will be called again during any signal emissions
             * @param id Handler ID of the handler to be unblocked
             */
            unblock_signal_handler(id: number): void;
            /**
             * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
             * @param detailedName Name of the signal to stop emission of
             */
            stop_emission_by_name(detailedName: string): void;
        }

        namespace BoxedWrapper {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {}

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class BoxedWrapper extends GObject.Object {
            static $gtype: GObject.GType<BoxedWrapper>;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: BoxedWrapper.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<BoxedWrapper.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](boxed_type: GObject.GType): BoxedWrapper;

            // Signals

            connect<K extends keyof BoxedWrapper.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, BoxedWrapper.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof BoxedWrapper.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, BoxedWrapper.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof BoxedWrapper.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<BoxedWrapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            dup_boxed(): any | null;
            get_boxed(): any | null;
            set_boxed(boxed?: any | null): void;
        }

        namespace Layout {
            // Signal signatures
            interface SignalSignatures extends Gtk.Box.SignalSignatures {
                'notify::toplevel-id': (pspec: GObject.ParamSpec) => void;
                'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
                'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
                'notify::spacing': (pspec: GObject.ParamSpec) => void;
                'notify::border-width': (pspec: GObject.ParamSpec) => void;
                'notify::child': (pspec: GObject.ParamSpec) => void;
                'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
                'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
                'notify::can-default': (pspec: GObject.ParamSpec) => void;
                'notify::can-focus': (pspec: GObject.ParamSpec) => void;
                'notify::composite-child': (pspec: GObject.ParamSpec) => void;
                'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
                'notify::events': (pspec: GObject.ParamSpec) => void;
                'notify::expand': (pspec: GObject.ParamSpec) => void;
                'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
                'notify::halign': (pspec: GObject.ParamSpec) => void;
                'notify::has-default': (pspec: GObject.ParamSpec) => void;
                'notify::has-focus': (pspec: GObject.ParamSpec) => void;
                'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
                'notify::height-request': (pspec: GObject.ParamSpec) => void;
                'notify::hexpand': (pspec: GObject.ParamSpec) => void;
                'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
                'notify::is-focus': (pspec: GObject.ParamSpec) => void;
                'notify::margin': (pspec: GObject.ParamSpec) => void;
                'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
                'notify::margin-end': (pspec: GObject.ParamSpec) => void;
                'notify::margin-left': (pspec: GObject.ParamSpec) => void;
                'notify::margin-right': (pspec: GObject.ParamSpec) => void;
                'notify::margin-start': (pspec: GObject.ParamSpec) => void;
                'notify::margin-top': (pspec: GObject.ParamSpec) => void;
                'notify::name': (pspec: GObject.ParamSpec) => void;
                'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
                'notify::opacity': (pspec: GObject.ParamSpec) => void;
                'notify::parent': (pspec: GObject.ParamSpec) => void;
                'notify::receives-default': (pspec: GObject.ParamSpec) => void;
                'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
                'notify::sensitive': (pspec: GObject.ParamSpec) => void;
                'notify::style': (pspec: GObject.ParamSpec) => void;
                'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
                'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
                'notify::valign': (pspec: GObject.ParamSpec) => void;
                'notify::vexpand': (pspec: GObject.ParamSpec) => void;
                'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
                'notify::visible': (pspec: GObject.ParamSpec) => void;
                'notify::width-request': (pspec: GObject.ParamSpec) => void;
                'notify::window': (pspec: GObject.ParamSpec) => void;
                'notify::orientation': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Box.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Orientable.ConstructorProps {
                toplevel_id: string;
                toplevelId: string;
            }
        }

        class Layout extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
            static $gtype: GObject.GType<Layout>;

            // Properties

            get toplevel_id(): string;
            get toplevelId(): string;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Layout.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Layout.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Layout.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Layout.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Layout.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Layout.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Layout.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Layout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Get a list of applets for these layout.
             * @returns list of #ValaPanelApplet instances inside layout
             */
            get_applets_list(): Applet[];

            // Inherited properties
            /**
             * The orientation of the orientable.
             */
            get orientation(): Gtk.Orientation;
            set orientation(val: Gtk.Orientation);

            // Inherited methods
            /**
             * Retrieves the orientation of the `orientable`.
             * @returns the orientation of the @orientable.
             */
            get_orientation(): Gtk.Orientation;
            /**
             * Sets the orientation of the `orientable`.
             * @param orientation the orientable’s new orientation.
             */
            set_orientation(orientation: Gtk.Orientation | null): void;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            /**
             * Gets a property of an object.
             *
             * The value can be:
             * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
             * - a GObject.Value initialized with the expected type of the property
             * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
             *
             * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
             *
             * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
             * @param property_name The name of the property to get
             * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
             */
            get_property(property_name: string, value: GObject.Value | any): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            /**
             * Sets a property on an object.
             * @param property_name The name of the property to set
             * @param value The value to set the property to
             */
            set_property(property_name: string, value: GObject.Value | any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
             * @param id Handler ID of the handler to be disconnected
             */
            disconnect(id: number): void;
            /**
             * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
             * @param properties Object containing the properties to set
             */
            set(properties: { [key: string]: any }): void;
            /**
             * Blocks a handler of an instance so it will not be called during any signal emissions
             * @param id Handler ID of the handler to be blocked
             */
            block_signal_handler(id: number): void;
            /**
             * Unblocks a handler so it will be called again during any signal emissions
             * @param id Handler ID of the handler to be unblocked
             */
            unblock_signal_handler(id: number): void;
            /**
             * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
             * @param detailedName Name of the signal to stop emission of
             */
            stop_emission_by_name(detailedName: string): void;
        }

        namespace ListModelFilter {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'notify::base-model': (pspec: GObject.ParamSpec) => void;
                'notify::max-results': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps<A extends GObject.Object = GObject.Object>
                extends GObject.Object.ConstructorProps,
                    Gio.ListModel.ConstructorProps {
                base_model: Gio.ListModel;
                baseModel: Gio.ListModel;
                max_results: number;
                maxResults: number;
            }
        }

        class ListModelFilter<A extends GObject.Object = GObject.Object>
            extends GObject.Object
            implements Gio.ListModel<A>
        {
            static $gtype: GObject.GType<ListModelFilter>;

            // Properties

            get base_model(): Gio.ListModel;
            get baseModel(): Gio.ListModel;
            get max_results(): number;
            set max_results(val: number);
            get maxResults(): number;
            set maxResults(val: number);

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: ListModelFilter.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<ListModelFilter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](base_model: Gio.ListModel): ListModelFilter;

            // Signals

            connect<K extends keyof ListModelFilter.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, ListModelFilter.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof ListModelFilter.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, ListModelFilter.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof ListModelFilter.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<ListModelFilter.SignalSignatures[K]> extends [any, ...infer Q]
                    ? Q
                    : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            invalidate(): void;
            set_filter_func(func: ListModelFilterFunc): void;
            set_max_results(max_results: number): void;

            // Inherited methods
            /**
             * Gets the type of the items in `list`.
             *
             * All items returned from g_list_model_get_item() are of the type
             * returned by this function, or a subtype, or if the type is an
             * interface, they are an implementation of that interface.
             *
             * The item type of a #GListModel can not change during the life of the
             * model.
             * @returns the #GType of the items contained in @list.
             */
            get_item_type(): GObject.GType;
            /**
             * Gets the number of items in `list`.
             *
             * Depending on the model implementation, calling this function may be
             * less efficient than iterating the list with increasing values for
             * `position` until g_list_model_get_item() returns %NULL.
             * @returns the number of items in @list.
             */
            get_n_items(): number;
            /**
             * Get the item at `position`.
             *
             * If `position` is greater than the number of items in `list,` %NULL is
             * returned.
             *
             * %NULL is never returned for an index that is smaller than the length
             * of the list.
             *
             * This function is meant to be used by language bindings in place
             * of g_list_model_get_item().
             *
             * See also: g_list_model_get_n_items()
             * @param position the position of the item to fetch
             * @returns the object at @position.
             */
            get_item(position: number): A | null;
            /**
             * Emits the #GListModel::items-changed signal on `list`.
             *
             * This function should only be called by classes implementing
             * #GListModel. It has to be called after the internal representation
             * of `list` has been updated, because handlers connected to this signal
             * might query the new state of the list.
             *
             * Implementations must only make changes to the model (as visible to
             * its consumer) in places that will not cause problems for that
             * consumer.  For models that are driven directly by a write API (such
             * as #GListStore), changes can be reported in response to uses of that
             * API.  For models that represent remote data, changes should only be
             * made from a fresh mainloop dispatch.  It is particularly not
             * permitted to make changes in response to a call to the #GListModel
             * consumer API.
             *
             * Stated another way: in general, it is assumed that code making a
             * series of accesses to the model via the API, without returning to the
             * mainloop, and without calling other code, will continue to view the
             * same contents of the model.
             * @param position the position at which @list changed
             * @param removed the number of items removed
             * @param added the number of items added
             */
            items_changed(position: number, removed: number, added: number): void;
            /**
             * Get the item at `position`. If `position` is greater than the number of
             * items in `list,` %NULL is returned.
             *
             * %NULL is never returned for an index that is smaller than the length
             * of the list.  See g_list_model_get_n_items().
             *
             * The same #GObject instance may not appear more than once in a #GListModel.
             * @param position the position of the item to fetch
             */
            vfunc_get_item(position: number): A | null;
            /**
             * Gets the type of the items in `list`.
             *
             * All items returned from g_list_model_get_item() are of the type
             * returned by this function, or a subtype, or if the type is an
             * interface, they are an implementation of that interface.
             *
             * The item type of a #GListModel can not change during the life of the
             * model.
             */
            vfunc_get_item_type(): GObject.GType;
            /**
             * Gets the number of items in `list`.
             *
             * Depending on the model implementation, calling this function may be
             * less efficient than iterating the list with increasing values for
             * `position` until g_list_model_get_item() returns %NULL.
             */
            vfunc_get_n_items(): number;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            /**
             * Gets a property of an object.
             *
             * The value can be:
             * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
             * - a GObject.Value initialized with the expected type of the property
             * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
             *
             * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
             *
             * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
             * @param property_name The name of the property to get
             * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
             */
            get_property(property_name: string, value: GObject.Value | any): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            /**
             * Sets a property on an object.
             * @param property_name The name of the property to set
             * @param value The value to set the property to
             */
            set_property(property_name: string, value: GObject.Value | any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
             * @param id Handler ID of the handler to be disconnected
             */
            disconnect(id: number): void;
            /**
             * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
             * @param properties Object containing the properties to set
             */
            set(properties: { [key: string]: any }): void;
            /**
             * Blocks a handler of an instance so it will not be called during any signal emissions
             * @param id Handler ID of the handler to be blocked
             */
            block_signal_handler(id: number): void;
            /**
             * Unblocks a handler so it will be called again during any signal emissions
             * @param id Handler ID of the handler to be unblocked
             */
            unblock_signal_handler(id: number): void;
            /**
             * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
             * @param detailedName Name of the signal to stop emission of
             */
            stop_emission_by_name(detailedName: string): void;
        }

        namespace Platform {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {}

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Platform extends GObject.Object {
            static $gtype: GObject.GType<Platform>;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Platform.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Platform.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Platform.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Platform.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Platform.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Platform.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Platform.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Platform.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Static methods

            /**
             * Get #GdkMonitor when toplevel can be placed.
             * @param self toplevel for which we need to get monitor
             * @param mon monitor number, where -1 is primary monitor.
             */
            static get_suitable_monitor(self: Gtk.Widget, mon: number): Gdk.Monitor;

            // Virtual methods

            vfunc_can_strut(top: Gtk.Window): boolean;
            vfunc_edge_available(top: Gtk.Window, gravity: Gravity, monitor: number): boolean;
            vfunc_get_name(): string;
            vfunc_move_to_side(top: Gtk.Window, alloc: Gravity, monitor: number): void;
            vfunc_start_panels_from_profile(app: Gtk.Application, profile: string): boolean;
            vfunc_update_strut(top: Gtk.Window): void;

            // Methods

            can_strut(top: Gtk.Window): boolean;
            edge_available(top: Gtk.Window, gravity: Gravity | null, monitor: number): boolean;
            get_name(): string;
            get_settings(): CoreSettings;
            has_units_loaded(): boolean;
            init_settings(backend: Gio.SettingsBackend): boolean;
            init_settings_full(schema: string, path: string, backend: Gio.SettingsBackend): boolean;
            move_to_side(top: Gtk.Window, alloc: Gravity | null, monitor: number): void;
            register_unit(unit: Gtk.Window): void;
            start_panels_from_profile(app: Gtk.Application, profile: string): boolean;
            unregister_unit(unit: Gtk.Window): void;
            update_strut(top: Gtk.Window): void;
        }

        namespace Toplevel {
            // Signal signatures
            interface SignalSignatures extends Gtk.ApplicationWindow.SignalSignatures {
                'notify::autohide': (pspec: GObject.ParamSpec) => void;
                'notify::background-color': (pspec: GObject.ParamSpec) => void;
                'notify::background-file': (pspec: GObject.ParamSpec) => void;
                'notify::corner-radius': (pspec: GObject.ParamSpec) => void;
                'notify::dock': (pspec: GObject.ParamSpec) => void;
                'notify::font': (pspec: GObject.ParamSpec) => void;
                'notify::font-size': (pspec: GObject.ParamSpec) => void;
                'notify::font-size-only': (pspec: GObject.ParamSpec) => void;
                'notify::foreground-color': (pspec: GObject.ParamSpec) => void;
                'notify::height': (pspec: GObject.ParamSpec) => void;
                'notify::icon-size': (pspec: GObject.ParamSpec) => void;
                'notify::is-dynamic': (pspec: GObject.ParamSpec) => void;
                'notify::monitor': (pspec: GObject.ParamSpec) => void;
                'notify::orientation': (pspec: GObject.ParamSpec) => void;
                'notify::panel-gravity': (pspec: GObject.ParamSpec) => void;
                'notify::strut': (pspec: GObject.ParamSpec) => void;
                'notify::use-background-color': (pspec: GObject.ParamSpec) => void;
                'notify::use-background-file': (pspec: GObject.ParamSpec) => void;
                'notify::use-font': (pspec: GObject.ParamSpec) => void;
                'notify::use-foreground-color': (pspec: GObject.ParamSpec) => void;
                'notify::use-toolbar-appearance': (pspec: GObject.ParamSpec) => void;
                'notify::uuid': (pspec: GObject.ParamSpec) => void;
                'notify::width': (pspec: GObject.ParamSpec) => void;
                'notify::show-menubar': (pspec: GObject.ParamSpec) => void;
                'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
                'notify::application': (pspec: GObject.ParamSpec) => void;
                'notify::attached-to': (pspec: GObject.ParamSpec) => void;
                'notify::decorated': (pspec: GObject.ParamSpec) => void;
                'notify::default-height': (pspec: GObject.ParamSpec) => void;
                'notify::default-width': (pspec: GObject.ParamSpec) => void;
                'notify::deletable': (pspec: GObject.ParamSpec) => void;
                'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
                'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
                'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
                'notify::gravity': (pspec: GObject.ParamSpec) => void;
                'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
                'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
                'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
                'notify::icon': (pspec: GObject.ParamSpec) => void;
                'notify::icon-name': (pspec: GObject.ParamSpec) => void;
                'notify::is-active': (pspec: GObject.ParamSpec) => void;
                'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
                'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
                'notify::modal': (pspec: GObject.ParamSpec) => void;
                'notify::resizable': (pspec: GObject.ParamSpec) => void;
                'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
                'notify::role': (pspec: GObject.ParamSpec) => void;
                'notify::screen': (pspec: GObject.ParamSpec) => void;
                'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
                'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
                'notify::startup-id': (pspec: GObject.ParamSpec) => void;
                'notify::title': (pspec: GObject.ParamSpec) => void;
                'notify::transient-for': (pspec: GObject.ParamSpec) => void;
                'notify::type': (pspec: GObject.ParamSpec) => void;
                'notify::type-hint': (pspec: GObject.ParamSpec) => void;
                'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
                'notify::window-position': (pspec: GObject.ParamSpec) => void;
                'notify::border-width': (pspec: GObject.ParamSpec) => void;
                'notify::child': (pspec: GObject.ParamSpec) => void;
                'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
                'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
                'notify::can-default': (pspec: GObject.ParamSpec) => void;
                'notify::can-focus': (pspec: GObject.ParamSpec) => void;
                'notify::composite-child': (pspec: GObject.ParamSpec) => void;
                'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
                'notify::events': (pspec: GObject.ParamSpec) => void;
                'notify::expand': (pspec: GObject.ParamSpec) => void;
                'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
                'notify::halign': (pspec: GObject.ParamSpec) => void;
                'notify::has-default': (pspec: GObject.ParamSpec) => void;
                'notify::has-focus': (pspec: GObject.ParamSpec) => void;
                'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
                'notify::height-request': (pspec: GObject.ParamSpec) => void;
                'notify::hexpand': (pspec: GObject.ParamSpec) => void;
                'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
                'notify::is-focus': (pspec: GObject.ParamSpec) => void;
                'notify::margin': (pspec: GObject.ParamSpec) => void;
                'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
                'notify::margin-end': (pspec: GObject.ParamSpec) => void;
                'notify::margin-left': (pspec: GObject.ParamSpec) => void;
                'notify::margin-right': (pspec: GObject.ParamSpec) => void;
                'notify::margin-start': (pspec: GObject.ParamSpec) => void;
                'notify::margin-top': (pspec: GObject.ParamSpec) => void;
                'notify::name': (pspec: GObject.ParamSpec) => void;
                'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
                'notify::opacity': (pspec: GObject.ParamSpec) => void;
                'notify::parent': (pspec: GObject.ParamSpec) => void;
                'notify::receives-default': (pspec: GObject.ParamSpec) => void;
                'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
                'notify::sensitive': (pspec: GObject.ParamSpec) => void;
                'notify::style': (pspec: GObject.ParamSpec) => void;
                'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
                'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
                'notify::valign': (pspec: GObject.ParamSpec) => void;
                'notify::vexpand': (pspec: GObject.ParamSpec) => void;
                'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
                'notify::visible': (pspec: GObject.ParamSpec) => void;
                'notify::width-request': (pspec: GObject.ParamSpec) => void;
                'notify::window': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.ApplicationWindow.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gio.ActionGroup.ConstructorProps,
                    Gio.ActionMap.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {
                autohide: boolean;
                background_color: string;
                backgroundColor: string;
                background_file: string;
                backgroundFile: string;
                corner_radius: number;
                cornerRadius: number;
                dock: boolean;
                font: string;
                font_size: number;
                fontSize: number;
                font_size_only: boolean;
                fontSizeOnly: boolean;
                foreground_color: string;
                foregroundColor: string;
                height: number;
                icon_size: number;
                iconSize: number;
                is_dynamic: boolean;
                isDynamic: boolean;
                monitor: number;
                orientation: Gtk.Orientation;
                panel_gravity: Gravity;
                panelGravity: Gravity;
                strut: boolean;
                use_background_color: boolean;
                useBackgroundColor: boolean;
                use_background_file: boolean;
                useBackgroundFile: boolean;
                use_font: boolean;
                useFont: boolean;
                use_foreground_color: boolean;
                useForegroundColor: boolean;
                use_toolbar_appearance: boolean;
                useToolbarAppearance: boolean;
                uuid: string;
                width: number;
            }
        }

        class Toplevel
            extends Gtk.ApplicationWindow
            implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable
        {
            static $gtype: GObject.GType<Toplevel>;

            // Properties

            get autohide(): boolean;
            set autohide(val: boolean);
            get background_color(): string;
            set background_color(val: string);
            get backgroundColor(): string;
            set backgroundColor(val: string);
            get background_file(): string;
            set background_file(val: string);
            get backgroundFile(): string;
            set backgroundFile(val: string);
            get corner_radius(): number;
            set corner_radius(val: number);
            get cornerRadius(): number;
            set cornerRadius(val: number);
            get dock(): boolean;
            set dock(val: boolean);
            get font(): string;
            set font(val: string);
            get font_size(): number;
            set font_size(val: number);
            get fontSize(): number;
            set fontSize(val: number);
            get font_size_only(): boolean;
            set font_size_only(val: boolean);
            get fontSizeOnly(): boolean;
            set fontSizeOnly(val: boolean);
            get foreground_color(): string;
            set foreground_color(val: string);
            get foregroundColor(): string;
            set foregroundColor(val: string);
            get height(): number;
            set height(val: number);
            get icon_size(): number;
            set icon_size(val: number);
            get iconSize(): number;
            set iconSize(val: number);
            get is_dynamic(): boolean;
            set is_dynamic(val: boolean);
            get isDynamic(): boolean;
            set isDynamic(val: boolean);
            get monitor(): number;
            set monitor(val: number);
            get orientation(): Gtk.Orientation;
            get panel_gravity(): Gravity;
            set panel_gravity(val: Gravity);
            get panelGravity(): Gravity;
            set panelGravity(val: Gravity);
            get strut(): boolean;
            set strut(val: boolean);
            get use_background_color(): boolean;
            set use_background_color(val: boolean);
            get useBackgroundColor(): boolean;
            set useBackgroundColor(val: boolean);
            get use_background_file(): boolean;
            set use_background_file(val: boolean);
            get useBackgroundFile(): boolean;
            set useBackgroundFile(val: boolean);
            get use_font(): boolean;
            set use_font(val: boolean);
            get useFont(): boolean;
            set useFont(val: boolean);
            get use_foreground_color(): boolean;
            set use_foreground_color(val: boolean);
            get useForegroundColor(): boolean;
            set useForegroundColor(val: boolean);
            get use_toolbar_appearance(): boolean;
            set use_toolbar_appearance(val: boolean);
            get useToolbarAppearance(): boolean;
            set useToolbarAppearance(val: boolean);
            get uuid(): string;
            get width(): number;
            set width(val: number);

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Toplevel.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Toplevel.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](app: Gtk.Application, plt: Platform, uid: string): Toplevel;
            // Conflicted with Gtk.ApplicationWindow.new

            static ['new'](...args: never[]): any;

            // Signals

            connect<K extends keyof Toplevel.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Toplevel.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Toplevel.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Toplevel.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Toplevel.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Toplevel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            configure(page: string): void;
            configure_applet(uuid: string): void;
            get_menu_anchors(menu_anchor: Gdk.Gravity | null, widget_anchor: Gdk.Gravity | null): void;
            init_ui(): void;
            update_visibility(mons: number): void;

            // Inherited methods
            /**
             * Emits the [signal`Gio`.ActionGroup::action-added] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            action_added(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-enabled-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param enabled whether the action is now enabled
             */
            action_enabled_changed(action_name: string, enabled: boolean): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-removed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            action_removed(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-state-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param state the new state of the named action
             */
            action_state_changed(action_name: string, state: GLib.Variant): void;
            /**
             * Activate the named action within `action_group`.
             *
             * If the action is expecting a parameter, then the correct type of
             * parameter must be given as `parameter`.  If the action is expecting no
             * parameters then `parameter` must be `NULL`.  See
             * [method`Gio`.ActionGroup.get_action_parameter_type].
             *
             * If the [type`Gio`.ActionGroup] implementation supports asynchronous remote
             * activation over D-Bus, this call may return before the relevant
             * D-Bus traffic has been sent, or any replies have been received. In
             * order to block on such asynchronous activation calls,
             * [method`Gio`.DBusConnection.flush] should be called prior to the code, which
             * depends on the result of the action activation. Without flushing
             * the D-Bus connection, there is no guarantee that the action would
             * have been activated.
             *
             * The following code which runs in a remote app instance, shows an
             * example of a ‘quit’ action being activated on the primary app
             * instance over D-Bus. Here [method`Gio`.DBusConnection.flush] is called
             * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
             * may fail to be activated on the primary instance.
             *
             * ```c
             * // call ‘quit’ action on primary instance
             * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
             *
             * // make sure the action is activated now
             * g_dbus_connection_flush (…);
             *
             * g_debug ("Application has been terminated. Exiting.");
             *
             * exit (0);
             * ```
             * @param action_name the name of the action to activate
             * @param parameter parameters to the activation
             */
            activate_action(action_name: string, parameter?: GLib.Variant | null): void;
            /**
             * Request for the state of the named action within `action_group` to be
             * changed to `value`.
             *
             * The action must be stateful and `value` must be of the correct type.
             * See [method`Gio`.ActionGroup.get_action_state_type].
             *
             * This call merely requests a change.  The action may refuse to change
             * its state or may change its state to something other than `value`.
             * See [method`Gio`.ActionGroup.get_action_state_hint].
             *
             * If the `value` GVariant is floating, it is consumed.
             * @param action_name the name of the action to request the change on
             * @param value the new state
             */
            change_action_state(action_name: string, value: GLib.Variant): void;
            /**
             * Checks if the named action within `action_group` is currently enabled.
             *
             * An action must be enabled in order to be activated or in order to
             * have its state changed from outside callers.
             * @param action_name the name of the action to query
             * @returns whether the action is currently enabled
             */
            get_action_enabled(action_name: string): boolean;
            /**
             * Queries the type of the parameter that must be given when activating
             * the named action within `action_group`.
             *
             * When activating the action using [method`Gio`.ActionGroup.activate_action],
             * the [type`GLib`.Variant] given to that function must be of the type returned
             * by this function.
             *
             * In the case that this function returns `NULL`, you must not give any
             * [type`GLib`.Variant], but `NULL` instead.
             *
             * The parameter type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different parameter type.
             * @param action_name the name of the action to query
             * @returns the parameter type
             */
            get_action_parameter_type(action_name: string): GLib.VariantType | null;
            /**
             * Queries the current state of the named action within `action_group`.
             *
             * If the action is not stateful then `NULL` will be returned.  If the
             * action is stateful then the type of the return value is the type
             * given by [method`Gio`.ActionGroup.get_action_state_type].
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             * @returns the current state of the action
             */
            get_action_state(action_name: string): GLib.Variant | null;
            /**
             * Requests a hint about the valid range of values for the state of the
             * named action within `action_group`.
             *
             * If `NULL` is returned it either means that the action is not stateful
             * or that there is no hint about the valid range of values for the
             * state of the action.
             *
             * If a [type`GLib`.Variant] array is returned then each item in the array is a
             * possible value for the state.  If a [type`GLib`.Variant] pair (ie: two-tuple) is
             * returned then the tuple specifies the inclusive lower and upper bound
             * of valid values for the state.
             *
             * In any case, the information is merely a hint.  It may be possible to
             * have a state value outside of the hinted range and setting a value
             * within the range may fail.
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             * @returns the state range hint
             */
            get_action_state_hint(action_name: string): GLib.Variant | null;
            /**
             * Queries the type of the state of the named action within
             * `action_group`.
             *
             * If the action is stateful then this function returns the
             * [type`GLib`.VariantType] of the state.  All calls to
             * [method`Gio`.ActionGroup.change_action_state] must give a [type`GLib`.Variant] of this
             * type and [method`Gio`.ActionGroup.get_action_state] will return a [type`GLib`.Variant]
             * of the same type.
             *
             * If the action is not stateful then this function will return `NULL`.
             * In that case, [method`Gio`.ActionGroup.get_action_state] will return `NULL`
             * and you must not call [method`Gio`.ActionGroup.change_action_state].
             *
             * The state type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different state type.
             * @param action_name the name of the action to query
             * @returns the state type, if the action is stateful
             */
            get_action_state_type(action_name: string): GLib.VariantType | null;
            /**
             * Checks if the named action exists within `action_group`.
             * @param action_name the name of the action to check for
             * @returns whether the named action exists
             */
            has_action(action_name: string): boolean;
            /**
             * Lists the actions contained within `action_group`.
             *
             * The caller is responsible for freeing the list with [func`GLib`.strfreev] when
             * it is no longer required.
             * @returns a `NULL`-terminated array   of the names of the actions in the group
             */
            list_actions(): string[];
            /**
             * Queries all aspects of the named action within an `action_group`.
             *
             * This function acquires the information available from
             * [method`Gio`.ActionGroup.has_action], [method`Gio`.ActionGroup.get_action_enabled],
             * [method`Gio`.ActionGroup.get_action_parameter_type],
             * [method`Gio`.ActionGroup.get_action_state_type],
             * [method`Gio`.ActionGroup.get_action_state_hint] and
             * [method`Gio`.ActionGroup.get_action_state] with a single function call.
             *
             * This provides two main benefits.
             *
             * The first is the improvement in efficiency that comes with not having
             * to perform repeated lookups of the action in order to discover
             * different things about it.  The second is that implementing
             * [type`Gio`.ActionGroup] can now be done by only overriding this one virtual
             * function.
             *
             * The interface provides a default implementation of this function that
             * calls the individual functions, as required, to fetch the
             * information.  The interface also provides default implementations of
             * those functions that call this function.  All implementations,
             * therefore, must override either this function or all of the others.
             *
             * If the action exists, `TRUE` is returned and any of the requested
             * fields (as indicated by having a non-`NULL` reference passed in) are
             * filled.  If the action doesn’t exist, `FALSE` is returned and the
             * fields may or may not have been modified.
             * @param action_name the name of an action in the group
             * @returns `TRUE` if the action exists, else `FALSE`
             */
            query_action(
                action_name: string,
            ): [
                boolean,
                boolean,
                GLib.VariantType | null,
                GLib.VariantType | null,
                GLib.Variant | null,
                GLib.Variant | null,
            ];
            /**
             * Emits the [signal`Gio`.ActionGroup::action-added] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            vfunc_action_added(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-enabled-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param enabled whether the action is now enabled
             */
            vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-removed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            vfunc_action_removed(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-state-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param state the new state of the named action
             */
            vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
            /**
             * Activate the named action within `action_group`.
             *
             * If the action is expecting a parameter, then the correct type of
             * parameter must be given as `parameter`.  If the action is expecting no
             * parameters then `parameter` must be `NULL`.  See
             * [method`Gio`.ActionGroup.get_action_parameter_type].
             *
             * If the [type`Gio`.ActionGroup] implementation supports asynchronous remote
             * activation over D-Bus, this call may return before the relevant
             * D-Bus traffic has been sent, or any replies have been received. In
             * order to block on such asynchronous activation calls,
             * [method`Gio`.DBusConnection.flush] should be called prior to the code, which
             * depends on the result of the action activation. Without flushing
             * the D-Bus connection, there is no guarantee that the action would
             * have been activated.
             *
             * The following code which runs in a remote app instance, shows an
             * example of a ‘quit’ action being activated on the primary app
             * instance over D-Bus. Here [method`Gio`.DBusConnection.flush] is called
             * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
             * may fail to be activated on the primary instance.
             *
             * ```c
             * // call ‘quit’ action on primary instance
             * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
             *
             * // make sure the action is activated now
             * g_dbus_connection_flush (…);
             *
             * g_debug ("Application has been terminated. Exiting.");
             *
             * exit (0);
             * ```
             * @param action_name the name of the action to activate
             * @param parameter parameters to the activation
             */
            vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
            /**
             * Request for the state of the named action within `action_group` to be
             * changed to `value`.
             *
             * The action must be stateful and `value` must be of the correct type.
             * See [method`Gio`.ActionGroup.get_action_state_type].
             *
             * This call merely requests a change.  The action may refuse to change
             * its state or may change its state to something other than `value`.
             * See [method`Gio`.ActionGroup.get_action_state_hint].
             *
             * If the `value` GVariant is floating, it is consumed.
             * @param action_name the name of the action to request the change on
             * @param value the new state
             */
            vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
            /**
             * Checks if the named action within `action_group` is currently enabled.
             *
             * An action must be enabled in order to be activated or in order to
             * have its state changed from outside callers.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_enabled(action_name: string): boolean;
            /**
             * Queries the type of the parameter that must be given when activating
             * the named action within `action_group`.
             *
             * When activating the action using [method`Gio`.ActionGroup.activate_action],
             * the [type`GLib`.Variant] given to that function must be of the type returned
             * by this function.
             *
             * In the case that this function returns `NULL`, you must not give any
             * [type`GLib`.Variant], but `NULL` instead.
             *
             * The parameter type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different parameter type.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
            /**
             * Queries the current state of the named action within `action_group`.
             *
             * If the action is not stateful then `NULL` will be returned.  If the
             * action is stateful then the type of the return value is the type
             * given by [method`Gio`.ActionGroup.get_action_state_type].
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_state(action_name: string): GLib.Variant | null;
            /**
             * Requests a hint about the valid range of values for the state of the
             * named action within `action_group`.
             *
             * If `NULL` is returned it either means that the action is not stateful
             * or that there is no hint about the valid range of values for the
             * state of the action.
             *
             * If a [type`GLib`.Variant] array is returned then each item in the array is a
             * possible value for the state.  If a [type`GLib`.Variant] pair (ie: two-tuple) is
             * returned then the tuple specifies the inclusive lower and upper bound
             * of valid values for the state.
             *
             * In any case, the information is merely a hint.  It may be possible to
             * have a state value outside of the hinted range and setting a value
             * within the range may fail.
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
            /**
             * Queries the type of the state of the named action within
             * `action_group`.
             *
             * If the action is stateful then this function returns the
             * [type`GLib`.VariantType] of the state.  All calls to
             * [method`Gio`.ActionGroup.change_action_state] must give a [type`GLib`.Variant] of this
             * type and [method`Gio`.ActionGroup.get_action_state] will return a [type`GLib`.Variant]
             * of the same type.
             *
             * If the action is not stateful then this function will return `NULL`.
             * In that case, [method`Gio`.ActionGroup.get_action_state] will return `NULL`
             * and you must not call [method`Gio`.ActionGroup.change_action_state].
             *
             * The state type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different state type.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
            /**
             * Checks if the named action exists within `action_group`.
             * @param action_name the name of the action to check for
             */
            vfunc_has_action(action_name: string): boolean;
            /**
             * Lists the actions contained within `action_group`.
             *
             * The caller is responsible for freeing the list with [func`GLib`.strfreev] when
             * it is no longer required.
             */
            vfunc_list_actions(): string[];
            /**
             * Queries all aspects of the named action within an `action_group`.
             *
             * This function acquires the information available from
             * [method`Gio`.ActionGroup.has_action], [method`Gio`.ActionGroup.get_action_enabled],
             * [method`Gio`.ActionGroup.get_action_parameter_type],
             * [method`Gio`.ActionGroup.get_action_state_type],
             * [method`Gio`.ActionGroup.get_action_state_hint] and
             * [method`Gio`.ActionGroup.get_action_state] with a single function call.
             *
             * This provides two main benefits.
             *
             * The first is the improvement in efficiency that comes with not having
             * to perform repeated lookups of the action in order to discover
             * different things about it.  The second is that implementing
             * [type`Gio`.ActionGroup] can now be done by only overriding this one virtual
             * function.
             *
             * The interface provides a default implementation of this function that
             * calls the individual functions, as required, to fetch the
             * information.  The interface also provides default implementations of
             * those functions that call this function.  All implementations,
             * therefore, must override either this function or all of the others.
             *
             * If the action exists, `TRUE` is returned and any of the requested
             * fields (as indicated by having a non-`NULL` reference passed in) are
             * filled.  If the action doesn’t exist, `FALSE` is returned and the
             * fields may or may not have been modified.
             * @param action_name the name of an action in the group
             */
            vfunc_query_action(
                action_name: string,
            ): [
                boolean,
                boolean,
                GLib.VariantType | null,
                GLib.VariantType | null,
                GLib.Variant | null,
                GLib.Variant | null,
            ];
            /**
             * Adds an action to the `action_map`.
             *
             * If the action map already contains an action with the same name
             * as `action` then the old action is dropped from the action map.
             *
             * The action map takes its own reference on `action`.
             * @param action a [iface@Gio.Action]
             */
            add_action(action: Gio.Action): void;
            /**
             * A convenience function for creating multiple simple actions.
             * See Gio.ActionEntryObj for the structure of the action entry.
             * @param entries Array of action entries to add
             */
            add_action_entries(entries: Gio.ActionEntryObj[]): void;
            /**
             * Looks up the action with the name `action_name` in `action_map`.
             *
             * If no such action exists, returns `NULL`.
             * @param action_name the name of an action
             * @returns a [iface@Gio.Action]
             */
            lookup_action(action_name: string): Gio.Action | null;
            /**
             * Removes the named action from the action map.
             *
             * If no action of this name is in the map then nothing happens.
             * @param action_name the name of the action
             */
            remove_action(action_name: string): void;
            /**
             * Remove actions from a [iface`Gio`.ActionMap]. This is meant as the reverse of
             * [method`Gio`.ActionMap.add_action_entries].
             *
             *
             * ```c
             * static const GActionEntry entries[] = {
             *     { "quit",         activate_quit              },
             *     { "print-string", activate_print_string, "s" }
             * };
             *
             * void
             * add_actions (GActionMap *map)
             * {
             *   g_action_map_add_action_entries (map, entries, G_N_ELEMENTS (entries), NULL);
             * }
             *
             * void
             * remove_actions (GActionMap *map)
             * {
             *   g_action_map_remove_action_entries (map, entries, G_N_ELEMENTS (entries));
             * }
             * ```
             * @param entries a pointer to   the first item in an array of [struct@Gio.ActionEntry] structs
             */
            remove_action_entries(entries: Gio.ActionEntry[]): void;
            /**
             * Adds an action to the `action_map`.
             *
             * If the action map already contains an action with the same name
             * as `action` then the old action is dropped from the action map.
             *
             * The action map takes its own reference on `action`.
             * @param action a [iface@Gio.Action]
             */
            vfunc_add_action(action: Gio.Action): void;
            /**
             * Looks up the action with the name `action_name` in `action_map`.
             *
             * If no such action exists, returns `NULL`.
             * @param action_name the name of an action
             */
            vfunc_lookup_action(action_name: string): Gio.Action | null;
            /**
             * Removes the named action from the action map.
             *
             * If no action of this name is in the map then nothing happens.
             * @param action_name the name of the action
             */
            vfunc_remove_action(action_name: string): void;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            /**
             * Gets a property of an object.
             *
             * The value can be:
             * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
             * - a GObject.Value initialized with the expected type of the property
             * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
             *
             * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
             *
             * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
             * @param property_name The name of the property to get
             * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
             */
            get_property(property_name: string, value: GObject.Value | any): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            /**
             * Sets a property on an object.
             * @param property_name The name of the property to set
             * @param value The value to set the property to
             */
            set_property(property_name: string, value: GObject.Value | any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
             * @param id Handler ID of the handler to be disconnected
             */
            disconnect(id: number): void;
            /**
             * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
             * @param properties Object containing the properties to set
             */
            set(properties: { [key: string]: any }): void;
            /**
             * Blocks a handler of an instance so it will not be called during any signal emissions
             * @param id Handler ID of the handler to be blocked
             */
            block_signal_handler(id: number): void;
            /**
             * Unblocks a handler so it will be called again during any signal emissions
             * @param id Handler ID of the handler to be unblocked
             */
            unblock_signal_handler(id: number): void;
            /**
             * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
             * @param detailedName Name of the signal to stop emission of
             */
            stop_emission_by_name(detailedName: string): void;
        }

        type AppletClass = typeof Applet;
        abstract class AppletInfo {
            static $gtype: GObject.GType<AppletInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static duplicate(info?: any | null): AppletInfo;
            static free(info?: any | null): void;
            static load(extension_name: string, plugin_type: GObject.GType): AppletInfo;

            // Methods

            get_about_widget(): Gtk.Widget;
            get_authors(): string[];
            get_description(): string;
            get_help_uri(): string;
            get_icon_name(): string;
            get_license(): Gtk.License;
            get_module_name(): string;
            get_name(): string;
            get_platforms(): string[];
            get_stored_type(): GObject.GType;
            get_version(): string;
            get_website(): string;
            is_exclusive(): boolean;
            show_about_dialog(): void;
        }

        type BoxedWrapperClass = typeof BoxedWrapper;
        class CoreSettings {
            static $gtype: GObject.GType<CoreSettings>;

            // Fields

            backend: Gio.SettingsBackend;
            core_settings: Gio.Settings;
            root_schema: string;
            root_path: string;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            free(): void;
        }

        type LayoutClass = typeof Layout;
        type ListModelFilterClass = typeof ListModelFilter;
        type PlatformClass = typeof Platform;
        type ToplevelClass = typeof Toplevel;
        class UnitSettings {
            static $gtype: GObject.GType<UnitSettings>;

            // Fields

            type: Gio.Settings;
            common: Gio.Settings;
            custom: Gio.Settings;
            uuid: string;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            free(): void;
            is_toplevel(): boolean;
        }

        /**
         * Name of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
         */
        const __name__: string;
        /**
         * Version of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
         */
        const __version__: string;
    }

    export default ValaPanel;
}

declare module 'gi://ValaPanel' {
    import ValaPanel2403 from 'gi://ValaPanel?version=24.03';
    export default ValaPanel2403;
}
// END
