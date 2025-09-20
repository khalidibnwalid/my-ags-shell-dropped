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

declare module 'gi://Libxfce4windowing?version=0.0' {
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

    export namespace Libxfce4windowing {
        /**
         * Libxfce4windowing-0.0
         */

        /**
         * The type of the application.
         *
         * See #xfw_set_client_type() for details.
         */

        /**
         * The type of the application.
         *
         * See #xfw_set_client_type() for details.
         */
        export namespace ClientType {
            export const $gtype: GObject.GType<ClientType>;
        }

        enum ClientType {
            /**
             * a regular application
             */
            APPLICATION,
            /**
             * a pager or other user-controlled desktop component
             */
            PAGER,
        }
        /**
         * Represents a direction, either of position ("This workspace is to the left
         * of the current workspace") or movement ("Move this window to the workspace to
         * the right of its current workspace").
         */

        /**
         * Represents a direction, either of position ("This workspace is to the left
         * of the current workspace") or movement ("Move this window to the workspace to
         * the right of its current workspace").
         */
        export namespace Direction {
            export const $gtype: GObject.GType<Direction>;
        }

        enum Direction {
            /**
             * upward from the current location
             */
            UP,
            /**
             * downward from the current location
             */
            DOWN,
            /**
             * to the left of the current location
             */
            LEFT,
            /**
             * to the right of the current location
             */
            RIGHT,
        }
        /**
         * An error code enum describing possible errors returned by this library.
         */
        class Error extends GLib.Error {
            static $gtype: GObject.GType<Error>;

            // Static fields

            /**
             * the operation attempted is not supported.
             */
            static UNSUPPORTED: number;
            /**
             * an internal error has occurred.
             */
            static INTERNAL: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * Describes how the color components of the physical pixels are laid out on a
         * monitor.
         */

        /**
         * Describes how the color components of the physical pixels are laid out on a
         * monitor.
         */
        export namespace MonitorSubpixel {
            export const $gtype: GObject.GType<MonitorSubpixel>;
        }

        enum MonitorSubpixel {
            /**
             * unknown subpixel ordering.
             */
            UNKNOWN,
            /**
             * no subpixel geometry.
             */
            NONE,
            /**
             * horizontal RGB.
             */
            HRGB,
            /**
             * horizontal BGR.
             */
            HBGR,
            /**
             * vertical RGB.
             */
            VRGB,
            /**
             * vertical BGR.
             */
            VBGR,
        }
        /**
         * Describes the rotation and reflection applied to a monitor.
         */
        /**
         * Describes the rotation and reflection applied to a monitor.
         */
        class MonitorTransform {
            static $gtype: GObject.GType<MonitorTransform>;

            // Static fields

            /**
             * no transformation applied.
             */
            static NORMAL: number;
            /**
             * rotated counter-clockwise by 90 degrees.
             */
            static '90': number;
            /**
             * rotated counter-clockwise by 180 degrees.
             */
            static '180': number;
            /**
             * rotated counter-clockwise by 270 degrees.
             */
            static '270': number;
            /**
             * flipped along a vertical axis.
             */
            static FLIPPED: number;
            /**
             * flipped along a vertical axis and rotated
             * counter-clockwise by 90 degrees.
             */
            static FLIPPED_90: number;
            /**
             * flipped
             * along a vertical axis and rotated counter-clockwise by 180 degrees.
             */
            static FLIPPED_180: number;
            /**
             * flipped along a vertical axis and
             * rotated counter-clockwise by 270 degrees.
             */
            static FLIPPED_270: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Enumeration describing the windows type or function.
         */

        /**
         * Enumeration describing the windows type or function.
         */
        export namespace WindowType {
            export const $gtype: GObject.GType<WindowType>;
        }

        enum WindowType {
            /**
             * window is a regular window.
             */
            NORMAL,
            /**
             * window is responsible for drawing the desktop.
             */
            DESKTOP,
            /**
             * window is a dock or panel.
             */
            DOCK,
            /**
             * window is a temporary dialog, like an error alert.
             */
            DIALOG,
            /**
             * window is a detached toolbar.
             */
            TOOLBAR,
            /**
             * window is a popup menu.
             */
            MENU,
            /**
             * window is a utility menu, like a tool picker or
             *                           color palette.
             */
            UTILITY,
            /**
             * window is an application splash screen.
             */
            SPLASHSCREEN,
        }
        /**
         * Represents the windowing environment that is currently running.  Note that
         * for an application running on XWayland, this will return #XFW_WINDOWING_X11.
         */

        /**
         * Represents the windowing environment that is currently running.  Note that
         * for an application running on XWayland, this will return #XFW_WINDOWING_X11.
         */
        export namespace Windowing {
            export const $gtype: GObject.GType<Windowing>;
        }

        enum Windowing {
            /**
             * the application is running under an unknown
             *                         or unsupported windowing system.
             */
            UNKNOWN,
            /**
             * the application is running under an X11 server.
             */
            X11,
            /**
             * the application is running under a Wayland
             *                         comopositor.
             */
            WAYLAND,
        }
        /**
         * A macro that evaluates to the major version of libxfce4windowing, in a format
         * that can be used by the C pre-processor.
         */
        const MAJOR_VERSION: number;
        /**
         * A macro that evaluates to the micro version of libxfce4windowing, in a format
         * that can be used by the C pre-processor.
         */
        const MICRO_VERSION: number;
        /**
         * A macro that evaluates to the minor version of libxfce4windowing, in a format
         * that can be used by the C pre-processor.
         */
        const MINOR_VERSION: number;
        /**
         * Checks that the libxfce4windowing library
         * in use is compatible with the given version. Generally you would pass in
         * the constants #LIBXFCE4WINDOWING_MAJOR_VERSION, #LIBXFCE4WINDOWING_MINOR_VERSION and
         * #LIBXFCE4WINDOWING_MICRO_VERSION as the three arguments to this function; that produces
         * a check that the library in use is compatible with the version of
         * libxfce4windowing the extension was compiled against.
         *
         *
         * ```c
         * const gchar *mismatch;
         * mismatch = libxfce4windowing_check_version(LIBXFCE4WINDOWING_MAJOR_VERSION,
         *                                            LIBXFCE4WINDOWING_MINOR_VERSION,
         *                                            LIBXFCE4WINDOWING_MICRO_VERSION);
         * if (G_UNLIKELY(mismatch != NULL)) {
         *   g_error("Version mismatch: %s", mismatch);
         * }
         * ```
         *
         * @param required_major the required major version.
         * @param required_minor the required minor version.
         * @param required_micro the required micro version.
         * @returns %NULL if the library is compatible with the given version, or a string describing the version mismatch. The returned string is owned by the library and must not be freed or modified by the caller.
         */
        function check_version(required_major: number, required_minor: number, required_micro: number): string | null;
        function error_quark(): GLib.Quark;
        /**
         * Sets the type of the application.  This is used when sending various
         * messages to control the behavior of other windows, to indicate the source of
         * the control.  In general, #XFW_CLIENT_TYPE_APPLICATION will be interpreted
         * as automated control from a regular application, and #XFW_CLIENT_TYPE_PAGER
         * will be interpreted as user-initiated control from a desktop component
         * application like a pager or dock.
         *
         * This does nothing on Wayland, but is safe to call under a Wayland session.
         * @param client_type A #XfwClientType
         */
        function set_client_type(client_type: ClientType | null): void;
        /**
         * Determines the windowing environment that is currently active.
         * @returns A value from the #XfwWindowing enum.
         */
        function windowing_get(): Windowing;
        /**
         * Flags bitfield that describes actions that can be taken on the window.
         */

        /**
         * Flags bitfield that describes actions that can be taken on the window.
         */
        export namespace WindowCapabilities {
            export const $gtype: GObject.GType<WindowCapabilities>;
        }

        enum WindowCapabilities {
            /**
             * window has no capabilities.
             */
            NONE,
            /**
             * window can be minimized/hidden.
             */
            CAN_MINIMIZE,
            /**
             * window can be unminimized/unhidden.
             */
            CAN_UNMINIMIZE,
            /**
             * window can be maximized.
             */
            CAN_MAXIMIZE,
            /**
             * window can be unmaximized/restored.
             */
            CAN_UNMAXIMIZE,
            /**
             * window can be set fullscreen.
             */
            CAN_FULLSCREEN,
            /**
             * window can be unset fullscreen.
             */
            CAN_UNFULLSCREEN,
            /**
             * window can be shaded.
             */
            CAN_SHADE,
            /**
             * window can be unshaded.
             */
            CAN_UNSHADE,
            /**
             * window can be moved.
             */
            CAN_MOVE,
            /**
             * window can be resized.
             */
            CAN_RESIZE,
            /**
             * window can be placed above others.
             */
            CAN_PLACE_ABOVE,
            /**
             * always above window can be
             *                                             returned to the normal stacking
             *                                             order.
             */
            CAN_UNPLACE_ABOVE,
            /**
             * window can be placed below others.
             */
            CAN_PLACE_BELOW,
            /**
             * always below window can be
             *                                             returned to the normal stacking
             *                                             order.
             */
            CAN_UNPLACE_BELOW,
            /**
             * window can be moved to a
             *                                                different workspace or can be
             *                                                pinned and unpinned.
             */
            CAN_CHANGE_WORKSPACE,
        }
        /**
         * A flags bitfield representing various states the window can hold.
         */

        /**
         * A flags bitfield representing various states the window can hold.
         */
        export namespace WindowState {
            export const $gtype: GObject.GType<WindowState>;
        }

        enum WindowState {
            /**
             * window has no state bits set.
             */
            NONE,
            /**
             * window is active (and often has the keyboard
             *                           focus).
             */
            ACTIVE,
            /**
             * window is minimized/hidden.
             */
            MINIMIZED,
            /**
             * window is maximized.
             */
            MAXIMIZED,
            /**
             * window is filling the entire screen.
             */
            FULLSCREEN,
            /**
             * window should not be shown in pagers.
             */
            SKIP_PAGER,
            /**
             * window should not be shown in task lists.
             */
            SKIP_TASKLIST,
            /**
             * window is shown on al workspaces.
             */
            PINNED,
            /**
             * window is hidden, except for its title bar.
             */
            SHADED,
            /**
             * window is always shown above other windows.
             */
            ABOVE,
            /**
             * window is always shown below other windows.
             */
            BELOW,
            /**
             * window is attempting to get the user's attention.
             */
            URGENT,
        }
        /**
         * Flags enum representing a bitfield of actions that can be performed on this
         * workspace.
         */

        /**
         * Flags enum representing a bitfield of actions that can be performed on this
         * workspace.
         */
        export namespace WorkspaceCapabilities {
            export const $gtype: GObject.GType<WorkspaceCapabilities>;
        }

        enum WorkspaceCapabilities {
            /**
             * workspace has no capabilities.
             */
            NONE,
            /**
             * workspace can be activated.
             */
            ACTIVATE,
            /**
             * workspace can be removed.
             */
            REMOVE,
        }
        /**
         * Flags enum representing a bitfield of actions that can be performed on this
         * workspace group.
         */

        /**
         * Flags enum representing a bitfield of actions that can be performed on this
         * workspace group.
         */
        export namespace WorkspaceGroupCapabilities {
            export const $gtype: GObject.GType<WorkspaceGroupCapabilities>;
        }

        enum WorkspaceGroupCapabilities {
            /**
             * group has no capabilities.
             */
            NONE,
            /**
             * new workspaces can be
             *                                                     created in this group.
             */
            CREATE_WORKSPACE,
            /**
             * the viewport coordinates
             *                                                  for this group can be
             *                                                  changed.
             */
            MOVE_VIEWPORT,
            /**
             * the number of rows and columns
             *                                               for this group can be changed.
             */
            SET_LAYOUT,
        }
        /**
         * Flags enum representing a bitfield that describes the workspace's state.
         */

        /**
         * Flags enum representing a bitfield that describes the workspace's state.
         */
        export namespace WorkspaceState {
            export const $gtype: GObject.GType<WorkspaceState>;
        }

        enum WorkspaceState {
            /**
             * workspace has no state information.
             */
            NONE,
            /**
             * workspace is the active workspace in its group.
             */
            ACTIVE,
            /**
             * workspace contains a window that is requesting
             *                              attention.
             */
            URGENT,
            /**
             * workspace should be hidden from pagers or other
             *                              UI elements.
             */
            HIDDEN,
            /**
             * workspace has a valid, visible viewport.
             */
            VIRTUAL,
        }
        namespace Application {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'icon-changed': () => void;
                'notify::class-id': (pspec: GObject.ParamSpec) => void;
                'notify::gicon': (pspec: GObject.ParamSpec) => void;
                'notify::instances': (pspec: GObject.ParamSpec) => void;
                'notify::name': (pspec: GObject.ParamSpec) => void;
                'notify::windows': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                class_id: string;
                classId: string;
                gicon: Gio.Icon;
                instances: ApplicationInstance[];
                name: string;
                windows: Window[];
            }
        }

        abstract class Application extends GObject.Object {
            static $gtype: GObject.GType<Application>;

            // Properties

            /**
             * The application class id.
             */
            get class_id(): string;
            /**
             * The application class id.
             */
            get classId(): string;
            /**
             * The #GIcon that represents this application.
             */
            get gicon(): Gio.Icon;
            /**
             * The list of #XfwApplicationInstance belonging to the application.
             */
            get instances(): ApplicationInstance[];
            /**
             * The application name.
             */
            get name(): string;
            /**
             * The list of #XfwWindow belonging to the application.
             */
            get windows(): Window[];

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Application.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Application.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Application.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Application.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Fetches this application's class id. On X11 this should be the class name of
             * the [WM_CLASS property](https://x.org/releases/X11R7.6/doc/xorg-docs/specs/ICCCM/icccm.html#wm_class_property).
             * On Wayland, it's the [application ID](https://wayland.app/protocols/wlr-foreign-toplevel-management-unstable-v1#zwlr_foreign_toplevel_handle_v1:event:app_id),
             * which should correspond to the basename of the application's desktop file.
             * @returns A UTF-8 formatted string, owned by @app.
             */
            get_class_id(): string;
            /**
             * Fetches `app'`s icon as a size-independent #GIcon.  If an icon cannot be
             * found, a #GIcon representing a fallback icon will be returned.  Whether or
             * not the returned icon is a fallback icon can be determined using
             * #xfw_application_icon_is_fallback().
             * @returns a #GIcon, owned by @app.
             */
            get_gicon(): Gio.Icon;
            /**
             * Fetches `app'`s icon.  If `app` has no icon, a fallback icon may be
             * returned.  Whether or not the returned icon is a fallback icon can be
             * determined using #xfw_application_icon_is_fallback().
             * @param size the desired icon size.
             * @param scale the UI scale factor.
             * @returns a #GdkPixbuf, owned by @app, or %NULL if @app has no icon and a fallback cannot be rendered.
             */
            get_icon(size: number, scale: number): GdkPixbuf.Pixbuf | null;
            /**
             * Finds the #XfwApplicationInstance to which `window` belongs.
             * @param window the application window you want to get the instance of.
             * @returns The #XfwApplicationInstance to which @window belongs, or %NULL if @window does not belong to @app, or if listing instances is not supported on the windowing environment in use. The returned #XfwApplicationInstance is owned by @app.
             */
            get_instance(window: Window): ApplicationInstance | null;
            /**
             * Lists all instances of the application.
             * @returns The list of #XfwApplicationInstance of @app, or %NULL if listing instances is not supported on the windowing environment in use. The list and its contents are owned by @app.
             */
            get_instances(): ApplicationInstance[] | null;
            /**
             * Fetches this application's human-readable name.
             * @returns A UTF-8 formatted string, owned by @app.
             */
            get_name(): string;
            /**
             * Lists all windows belonging to the application.
             * @returns The list of #XfwWindow belonging to @app. The list and its contents are owned by @app.
             */
            get_windows(): Window[];
            /**
             * Determines if `app` does not have an icon, and thus a fallback icon
             * will be returned from #xfw_application_get_icon() and
             * #xfw_application_get_gicon().
             * @returns %TRUE or %FALSE, depending on if @app's icon uses a fallback icon or not.
             */
            icon_is_fallback(): boolean;
        }

        namespace Monitor {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'notify::connector': (pspec: GObject.ParamSpec) => void;
                'notify::description': (pspec: GObject.ParamSpec) => void;
                'notify::fractional-scale': (pspec: GObject.ParamSpec) => void;
                'notify::gdk-monitor': (pspec: GObject.ParamSpec) => void;
                'notify::height-mm': (pspec: GObject.ParamSpec) => void;
                'notify::identifier': (pspec: GObject.ParamSpec) => void;
                'notify::is-primary': (pspec: GObject.ParamSpec) => void;
                'notify::logical-geometry': (pspec: GObject.ParamSpec) => void;
                'notify::make': (pspec: GObject.ParamSpec) => void;
                'notify::model': (pspec: GObject.ParamSpec) => void;
                'notify::physical-geometry': (pspec: GObject.ParamSpec) => void;
                'notify::refresh': (pspec: GObject.ParamSpec) => void;
                'notify::scale': (pspec: GObject.ParamSpec) => void;
                'notify::serial': (pspec: GObject.ParamSpec) => void;
                'notify::subpixel': (pspec: GObject.ParamSpec) => void;
                'notify::transform': (pspec: GObject.ParamSpec) => void;
                'notify::width-mm': (pspec: GObject.ParamSpec) => void;
                'notify::workarea': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                connector: string;
                description: string;
                fractional_scale: number;
                fractionalScale: number;
                gdk_monitor: Gdk.Monitor;
                gdkMonitor: Gdk.Monitor;
                height_mm: number;
                heightMm: number;
                identifier: string;
                is_primary: boolean;
                isPrimary: boolean;
                logical_geometry: Gdk.Rectangle;
                logicalGeometry: Gdk.Rectangle;
                make: string;
                model: string;
                physical_geometry: Gdk.Rectangle;
                physicalGeometry: Gdk.Rectangle;
                refresh: number;
                scale: number;
                serial: string;
                subpixel: MonitorSubpixel;
                transform: MonitorTransform;
                width_mm: number;
                widthMm: number;
                workarea: Gdk.Rectangle;
            }
        }

        abstract class Monitor extends GObject.Object {
            static $gtype: GObject.GType<Monitor>;

            // Properties

            /**
             * Physical/virtual connector name.
             */
            get connector(): string;
            /**
             * Human-readable description.
             */
            get description(): string;
            /**
             * UI fractional scaling factor.
             */
            get fractional_scale(): number;
            /**
             * UI fractional scaling factor.
             */
            get fractionalScale(): number;
            /**
             * The #GdkMonitor corresponding to this monitor.
             *
             * Since 4.19.4
             */
            get gdk_monitor(): Gdk.Monitor;
            /**
             * The #GdkMonitor corresponding to this monitor.
             *
             * Since 4.19.4
             */
            get gdkMonitor(): Gdk.Monitor;
            /**
             * Physical height of the monitor in millimeters.
             */
            get height_mm(): number;
            /**
             * Physical height of the monitor in millimeters.
             */
            get heightMm(): number;
            /**
             * Opaque, hopefully-unique monitor identifier.
             */
            get identifier(): string;
            /**
             * Whether or not this monitor is the primary monitor.
             */
            get is_primary(): boolean;
            /**
             * Whether or not this monitor is the primary monitor.
             */
            get isPrimary(): boolean;
            /**
             * Coordinates and size of the monitor in scaled logical pixels.
             */
            get logical_geometry(): Gdk.Rectangle;
            /**
             * Coordinates and size of the monitor in scaled logical pixels.
             */
            get logicalGeometry(): Gdk.Rectangle;
            /**
             * Manufacturer name.
             */
            get make(): string;
            /**
             * Product model name.
             */
            get model(): string;
            /**
             * Coordinates and size of the monitor in physical device pixels.
             */
            get physical_geometry(): Gdk.Rectangle;
            /**
             * Coordinates and size of the monitor in physical device pixels.
             */
            get physicalGeometry(): Gdk.Rectangle;
            /**
             * Current refresh rate, in millihertz.
             */
            get refresh(): number;
            /**
             * UI scaling factor.
             */
            get scale(): number;
            /**
             * Product serial number.
             */
            get serial(): string;
            /**
             * Hardware subpixel layout.
             */
            get subpixel(): MonitorSubpixel;
            get transform(): MonitorTransform;
            /**
             * Physical width of the monitor in millimeters.
             */
            get width_mm(): number;
            /**
             * Physical width of the monitor in millimeters.
             */
            get widthMm(): number;
            get workarea(): Gdk.Rectangle;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Monitor.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Monitor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Monitor.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Monitor.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Monitor.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Monitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Returns the name of the physical connector this monitor is connected to.
             *
             * This might be a string such as "eDP-1", "DP-3", or "HDMI-2".  Note that in
             * environments where the monitor is "virtual", a synthetic connector name may
             * be returned.
             * @returns A string owned by @monitor.
             */
            get_connector(): string;
            /**
             * Returns a human-readable description of this monitor, suitable for
             * displaying in a user interface.
             * @returns A string owned by @monitor.
             */
            get_description(): string;
            /**
             * Returns the monitor's scaling factor.
             * @returns A positive fractional scale.
             */
            get_fractional_scale(): number;
            /**
             * Returns the #GdkMonitor that corresponds to `monitor`.
             * @returns A #GdkMonitor.
             */
            get_gdk_monitor(): Gdk.Monitor;
            /**
             * Retrieves an opaque identifier for this monitor.  The identifier can usually
             * be relied upon to uniquely identify this monitor (even if you have multiple
             * identical monitors of the same make and model), assuming the monitor's
             * hardware is set up properly.
             *
             * This identifier should also be stable across application and machine
             * restarts.
             *
             * If the monitor's hardware is not set up properly, the identifier may not be
             * unique.  Unfortunately, this library cannot determine when this is the case.
             * @returns A string owned by @monitor.
             */
            get_identifier(): string;
            /**
             * Retrieves the position and size of the monitor in logical application
             * pixels, which are affected by the monitor's fractional scale factor.
             */
            get_logical_geometry(): Gdk.Rectangle;
            /**
             * Returns the monitor's manufacturer's name, if available.
             * @returns A string owned by @monitor, or %NULL.
             */
            get_make(): string | null;
            /**
             * Returns the monitor's product model name, if available.
             * @returns A string owned by @monitor, or %NULL.
             */
            get_model(): string | null;
            /**
             * Retrieves the position and size of the monitor in physical device pixels.
             */
            get_physical_geometry(): Gdk.Rectangle;
            /**
             * Retrieves the physical width and height of the monitor in millimeters.
             */
            get_physical_size(): [number, number];
            /**
             * Returns the monitor's current refresh rate, in millihertz.
             * @returns A non-negative integer in mHz.
             */
            get_refresh(): number;
            /**
             * Returns the monitor's scaling factor, as an integer.
             * @returns A positive integer scale.
             */
            get_scale(): number;
            /**
             * Returns the monitor's serial number, if available.  Note that some
             * manufacturers do not program their monitor's hardware with unique serial
             * numbers.
             * @returns A string owned by @monitor, or %NULL.
             */
            get_serial(): string | null;
            /**
             * Returns the subpixel ordering of `monitor`.
             * @returns A value from the #XfwMonitorSubpixel enum.
             */
            get_subpixel(): MonitorSubpixel;
            /**
             * Returns the rotation and reflection transform set on `monitor`.
             * @returns A value from the #XfwMonitorTransform enum.
             */
            get_transform(): MonitorTransform;
            /**
             * Retrieves the workarea for `monitor,` which may exclude regions of the screen
             * for windows such as panels or docks.
             *
             * The returned geometry is in logical application pixels, which are affected
             * by the monitor's integer scale factor.  The origin is set to the top-left
             * corner of the monitor.
             */
            get_workarea(): Gdk.Rectangle;
        }

        namespace Screen {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'active-window-changed': (arg0: Window) => void;
                'monitor-added': (arg0: Monitor) => void;
                'monitor-removed': (arg0: Monitor) => void;
                'monitors-changed': () => void;
                'seat-added': (arg0: Seat) => void;
                'seat-removed': (arg0: Seat) => void;
                'window-closed': (arg0: Window) => void;
                'window-manager-changed': () => void;
                'window-opened': (arg0: Window) => void;
                'window-stacking-changed': () => void;
                'notify::active-window': (pspec: GObject.ParamSpec) => void;
                'notify::gdk-screen': (pspec: GObject.ParamSpec) => void;
                'notify::show-desktop': (pspec: GObject.ParamSpec) => void;
                'notify::workspace-manager': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                active_window: Window;
                activeWindow: Window;
                gdk_screen: Gdk.Screen;
                gdkScreen: Gdk.Screen;
                show_desktop: boolean;
                showDesktop: boolean;
                workspace_manager: WorkspaceManager;
                workspaceManager: WorkspaceManager;
            }
        }

        abstract class Screen extends GObject.Object {
            static $gtype: GObject.GType<Screen>;

            // Properties

            /**
             * The currently-active window.
             */
            get active_window(): Window;
            /**
             * The currently-active window.
             */
            get activeWindow(): Window;
            /**
             * The #GdkScreen instance used to construct this #XfwScreen.
             */
            get gdk_screen(): Gdk.Screen;
            /**
             * The #GdkScreen instance used to construct this #XfwScreen.
             */
            get gdkScreen(): Gdk.Screen;
            /**
             * Whether or not to show the desktop.
             */
            get show_desktop(): boolean;
            set show_desktop(val: boolean);
            /**
             * Whether or not to show the desktop.
             */
            get showDesktop(): boolean;
            set showDesktop(val: boolean);
            /**
             * The #XfwWorkspaceManager that manages and describes workspace groups
             * and workspaces on this screen instance.
             */
            get workspace_manager(): WorkspaceManager;
            /**
             * The #XfwWorkspaceManager that manages and describes workspace groups
             * and workspaces on this screen instance.
             */
            get workspaceManager(): WorkspaceManager;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Screen.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Screen.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Screen.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Screen.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Screen.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Screen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Static methods

            /**
             * Retrieves the #XfwScreen instance corresponding to the default #GdkScreen.
             */
            static get_default(): Screen;

            // Methods

            /**
             * Retrieves the window on `screen` that is currently active.
             * @returns an #XfwWindow, or %NULL if no window is active on @screen.
             */
            get_active_window(): Window | null;
            /**
             * Retrieves the list of monitors currently attached and enabled on `screen`.
             * @returns the list of #XfwMonitor on @screen, or %NULL if there are no connected/enabled monitors.  The list and its contents are owned by @screen.
             */
            get_monitors(): Monitor[] | null;
            /**
             * Returns the monitor designated as "primary".
             *
             * This function will do its best to return something other than %NULL.  If the
             * windowing system has no concept of a primary monitor, or if the primary
             * monitor is unset, a likely candidate will be chosen from the list of
             * available monitors.
             *
             * However, if no monitors are connected, %NULL can still be returned.
             * @returns @screen's primary #XfwMonitor, or %NULL.
             */
            get_primary_monitor(): Monitor | null;
            /**
             * Returns the list of all #XfwSeat instances available on `screen`.
             * @returns a list of #XfwSeat.  The list and its contents are owned by @screen.
             */
            get_seats(): Seat[] | null;
            get_show_desktop(): boolean;
            /**
             * Retrieves the list of windows currently displayed on `screen`.
             *
             * The list and its contents are owned by `screen`.
             * @returns the list of #XfwWindow on @screen, or %NULL if there are no windows.  The list and its contents are owned by @screen.
             */
            get_windows(): Window[] | null;
            /**
             * Retrieves the list of windows currently displayed on `screen,` in stacking
             * order, with the bottom-most window first in the returned list.
             * @returns the list of #XfwWindow on @screen, in stacking order, or %NULL if there are no windows.  The list and its contents are owned by @screen.
             */
            get_windows_stacked(): Window[] | null;
            /**
             * Retrieves this screen's #XfwWorkspaceManager instance, which can be used
             * to inspect and interact with `screen'`s workspace groups and workspaces.
             * @returns a #XfwWorkspaceManager instance.  This instance is a singleton and is owned by @screen.
             */
            get_workspace_manager(): WorkspaceManager;
            /**
             * Showing the desktop minimizes the windows not minimized at the time of the query.
             * The reverse process unminimizes those same windows, if they have not already been
             * unminimized or destroyed. The desktop show state can be tracked via
             * #XfwScreen:show-desktop.
             *
             * The state of the previously active window is always restored upon unminimization,
             * but there is no guarantee for the rest of the window stacking order on Wayland.
             *
             * A request to switch to the current state is silently ignored.
             * @param show %TRUE to show the desktop, %FALSE to restore the previous state.
             */
            set_show_desktop(show: boolean): void;
        }

        namespace Seat {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'notify::name': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                name: string;
            }
        }

        class Seat extends GObject.Object {
            static $gtype: GObject.GType<Seat>;

            // Properties

            /**
             * The seat's identifier.
             */
            get name(): string;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Seat.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Seat.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Seat.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Seat.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Seat.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Seat.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Seat.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Seat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            /**
             * Returns the name or identifier of `seat`.
             */
            get_name(): string;
        }

        namespace Window {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'capabilities-changed': (arg0: WindowCapabilities, arg1: WindowCapabilities) => void;
                'class-changed': () => void;
                closed: () => void;
                'geometry-changed': () => void;
                'icon-changed': () => void;
                'name-changed': () => void;
                'state-changed': (arg0: WindowState, arg1: WindowState) => void;
                'type-changed': (arg0: WindowType) => void;
                'workspace-changed': () => void;
                'notify::application': (pspec: GObject.ParamSpec) => void;
                'notify::capabilities': (pspec: GObject.ParamSpec) => void;
                'notify::class-ids': (pspec: GObject.ParamSpec) => void;
                'notify::gicon': (pspec: GObject.ParamSpec) => void;
                'notify::monitors': (pspec: GObject.ParamSpec) => void;
                'notify::name': (pspec: GObject.ParamSpec) => void;
                'notify::screen': (pspec: GObject.ParamSpec) => void;
                'notify::state': (pspec: GObject.ParamSpec) => void;
                'notify::type': (pspec: GObject.ParamSpec) => void;
                'notify::workspace': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                application: Application;
                capabilities: WindowCapabilities;
                class_ids: string[];
                classIds: string[];
                gicon: Gio.Icon;
                monitors: Monitor[];
                name: string;
                screen: Screen;
                state: WindowState;
                type: WindowType;
                workspace: Workspace;
            }
        }

        abstract class Window extends GObject.Object {
            static $gtype: GObject.GType<Window>;

            // Properties

            /**
             * The #XfwApplication that owns this window.
             */
            get application(): Application;
            /**
             * The window's capabilities bitfield.
             */
            get capabilities(): WindowCapabilities;
            /**
             * The window's class ids.
             */
            get class_ids(): string[];
            /**
             * The window's class ids.
             */
            get classIds(): string[];
            /**
             * The #GIcon that represents this window.
             */
            get gicon(): Gio.Icon;
            /**
             * The list of #XfwMonitor<!-- -->s (if any) that the window is displayed on.
             */
            get monitors(): Monitor[];
            /**
             * The window's name or title.
             */
            get name(): string;
            /**
             * The #XfwScreen instances that owns this window.
             */
            get screen(): Screen;
            /**
             * The window's state bitfield.
             */
            get state(): WindowState;
            /**
             * The window's type or function.
             */
            get type(): WindowType;
            get workspace(): Workspace;

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Window.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect<K extends keyof Window.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Window.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Window.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Methods

            activate(seat: Seat, event_timestamp: number): boolean;
            close(event_timestamp: number): boolean;
            /**
             * Fetches `window'`s application.
             * @returns An #XfwApplication instance, with a reference owned by @window.
             */
            get_application(): Application;
            /**
             * Fetches `window'`s capabilities bitfield.
             * @returns a bitfield with zero or more bits from #XfwWindowCapabilities set.
             */
            get_capabilities(): WindowCapabilities;
            /**
             * Fetches `window'`s class ids. On X11 this should contain the class and instance
             * names of the [WM_CLASS property](https://x.org/releases/X11R7.6/doc/xorg-docs/specs/ICCCM/icccm.html#wm_class_property).
             * On Wayland, it's likely to be limited to the [application ID](https://wayland.app/protocols/wlr-foreign-toplevel-management-unstable-v1#zwlr_foreign_toplevel_handle_v1:event:app_id),
             * which should correspond to the basename of the application's desktop file.
             * @returns a %NULL-terminated array of strings owned by the #XfwWindow.
             */
            get_class_ids(): string[];
            /**
             * Fetches `window'`s position and size.
             * @returns A #GdkRectangle representing @window's geometry, which should not be modified or freed.
             */
            get_geometry(): Gdk.Rectangle;
            /**
             * Fetches `window'`s icon as a size-independent #GIcon.  If an icon cannot be
             * found, a #GIcon representing a fallback icon will be returned.  Whether or
             * not the returned icon is a fallback icon can be determined using
             * #xfw_window_icon_is_fallback().
             * @returns a #GIcon, owned by @window.
             */
            get_gicon(): Gio.Icon;
            /**
             * Fetches `window'`s icon.  If `window` has no icon, a fallback icon may be
             * returned.  Whether or not the returned icon is a fallback icon can be
             * determined using #xfw_window_icon_is_fallback().
             * @param size the desired icon size.
             * @param scale the UI scale factor.
             * @returns a #GdkPixbuf, owned by @window, or %NULL if @window has no icon and a fallback cannot be rendered.
             */
            get_icon(size: number, scale: number): GdkPixbuf.Pixbuf | null;
            /**
             * Fetches the list of monitors `window` is displayed on, if any.
             * @returns A list of #XfwMonitor instances, or %NULL.  The list and its contents are owned by @window and should not be modified or freed.
             */
            get_monitors(): Monitor[] | null;
            /**
             * Fetches `window'`s name/title.
             * @returns a window title, or %NULL if there is no title.  The returned title should not be modified or freed.
             */
            get_name(): string | null;
            /**
             * Fetches the #XfwScreen instance that owns `window`.
             * @returns A #XfwScreen instance, with a reference owned by @window.
             */
            get_screen(): Screen;
            /**
             * Fetches `window'`s state bitfield.
             * @returns a bitfield with zero or more bits from #XfwWindowState set.
             */
            get_state(): WindowState;
            get_window_type(): WindowType;
            /**
             * Fetches `window'`s workspace, if any.  This may return %NULL if `window` is
             * not on a workspace, or is pinned to all workspaces.
             * @returns A #XfwWorkspace instance, with a reference owned by @window, or %NULL.
             */
            get_workspace(): Workspace | null;
            /**
             * Determines if `window` does not have an icon, and thus a fallback icon
             * will be returned from #xfw_window_get_icon() and #xfw_window_get_gicon().
             * @returns %TRUE or %FALSE, depending on if @window's icon uses a fallback icon or not.
             */
            icon_is_fallback(): boolean;
            is_above(): boolean;
            is_active(): boolean;
            is_below(): boolean;
            is_fullscreen(): boolean;
            is_in_viewport(workspace: Workspace): boolean;
            is_maximized(): boolean;
            is_minimized(): boolean;
            is_on_workspace(workspace: Workspace): boolean;
            is_pinned(): boolean;
            is_shaded(): boolean;
            is_skip_pager(): boolean;
            is_skip_tasklist(): boolean;
            is_urgent(): boolean;
            move_to_workspace(workspace: Workspace): boolean;
            set_above(is_above: boolean): boolean;
            set_below(is_below: boolean): boolean;
            set_button_geometry(relative_to: Gdk.Window, rect: Gdk.Rectangle): boolean;
            set_fullscreen(is_fullscreen: boolean): boolean;
            set_geometry(rect: Gdk.Rectangle): boolean;
            set_maximized(is_maximized: boolean): boolean;
            set_minimized(is_minimized: boolean): boolean;
            set_pinned(is_pinned: boolean): boolean;
            set_shaded(is_shaded: boolean): boolean;
            set_skip_pager(is_skip_pager: boolean): boolean;
            set_skip_tasklist(is_skip_tasklist: boolean): boolean;
            start_move(): boolean;
            start_resize(): boolean;
            x11_get_xid(): xlib.Window;
        }

        type ApplicationClass = typeof Application;
        /**
         * An opaque structure representing an instance of an #XfwApplication.
         */
        abstract class ApplicationInstance {
            static $gtype: GObject.GType<ApplicationInstance>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Fetches `instance'`s name, which can often be the same as the application name.
             * @returns A string owned by @instance.
             */
            get_name(): string;
            /**
             * Fetches `instance'`s PID.
             * @returns The process ID of @instance, or 0 if none is available.
             */
            get_pid(): number;
            /**
             * Lists all windows belonging to the application instance.
             * @returns The list of #XfwWindow belonging to @instance. The list and its contents are owned by @instance.
             */
            get_windows(): Window[];
        }

        type MonitorClass = typeof Monitor;
        type ScreenClass = typeof Screen;
        type SeatClass = typeof Seat;
        type WindowClass = typeof Window;
        type WorkspaceGroupIface = typeof WorkspaceGroup;
        abstract class WorkspaceGroupInterface {
            static $gtype: GObject.GType<WorkspaceGroupInterface>;

            // Constructors

            _init(...args: any[]): void;
        }

        type WorkspaceIface = typeof Workspace;
        abstract class WorkspaceInterface {
            static $gtype: GObject.GType<WorkspaceInterface>;

            // Constructors

            _init(...args: any[]): void;
        }

        type WorkspaceManagerIface = typeof WorkspaceManager;
        abstract class WorkspaceManagerInterface {
            static $gtype: GObject.GType<WorkspaceManagerInterface>;

            // Constructors

            _init(...args: any[]): void;
        }

        namespace Workspace {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                capabilities: WorkspaceCapabilities;
                group: WorkspaceGroup;
                id: string;
                layout_column: number;
                layoutColumn: number;
                layout_row: number;
                layoutRow: number;
                name: string;
                number: number;
                state: WorkspaceState;
            }
        }

        export interface WorkspaceNamespace {
            $gtype: GObject.GType<Workspace>;
            prototype: Workspace;
        }
        interface Workspace extends GObject.Object {
            // Properties

            /**
             * The #XfwWorkspaceCapabilities bitfield for this workspace.
             */
            get capabilities(): WorkspaceCapabilities;
            set capabilities(val: WorkspaceCapabilities);
            /**
             * The #XfwWorkspaceGroup that this workspace is a member of, if any.
             */
            get group(): WorkspaceGroup;
            /**
             * The opaque ID of this workspace.
             */
            get id(): string;
            /**
             * The y-coordinate of the workspace on a 2D grid.
             */
            get layout_column(): number;
            /**
             * The y-coordinate of the workspace on a 2D grid.
             */
            get layoutColumn(): number;
            /**
             * The x-coordinate of the workspace on a 2D grid.
             */
            get layout_row(): number;
            /**
             * The x-coordinate of the workspace on a 2D grid.
             */
            get layoutRow(): number;
            /**
             * The human-readable name of this workspace.
             */
            get name(): string;
            set name(val: string);
            /**
             * The ordinal number of this workspace.
             */
            get number(): number;
            /**
             * The #XfwWorkspaceState bitfield for this workspace.
             */
            get state(): WorkspaceState;
            set state(val: WorkspaceState);

            // Methods

            /**
             * Attempts to set `workspace` as the active workspace in its group.
             *
             * On failure, `error` (if provided) will be set to a description of the error
             * that occurred.
             * @returns %TRUE if workspace activation succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
             */
            activate(): boolean;
            /**
             * Attempts to assign `workspace` to `group`.
             *
             * On failure, `error` (if provided) will be set to a description of the error
             * that occurred.
             * @param group an #XfwWorkspaceGroup.
             * @returns %TRUE if workspace assignment succeeded, %FALSE otherwise. If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using g_error_free().
             */
            assign_to_workspace_group(group: WorkspaceGroup): boolean;
            /**
             * Fetches this workspace's capabilities bitfield.
             *
             * The bitfield describes what operations are available on this workspace.
             * @returns a #XfwWorkspaceCapabilities bitfield.
             */
            get_capabilities(): WorkspaceCapabilities;
            /**
             * Fetches the position and size of the workspace in screen coordinates.
             *
             * The values in the returned #GdkRectangle are owned by `workspace` and should
             * not be modified.
             * @returns a #GdkRectangle, owned by @workspace.
             */
            get_geometry(): Gdk.Rectangle;
            /**
             * Fetches this workspace's opaque ID.
             * @returns A UTF-8 formatted string, owned by @workspace.
             */
            get_id(): string;
            /**
             * Fetches the column this workspace belongs to in the workspace's group.
             *
             * This information can be used to lay out workspaces in a grid in a pager
             * UI, for example.
             * @returns a non-negative, 0-indexed integer.
             */
            get_layout_column(): number;
            /**
             * Fetches the row this workspace belongs to in the workspace's group.
             *
             * This information can be used to lay out workspaces in a grid in a pager
             * UI, for example.
             * @returns a non-negative, 0-indexed integer.
             */
            get_layout_row(): number;
            /**
             * Fetches this workspace's human-readable name.
             * @returns A UTF-8 formatted string, owned by @workspace.
             */
            get_name(): string;
            /**
             * Fetches the workspace that resides in `direction` from the `workspace,` if
             * any.  If workspace is on the edge of the layout, and `direction` points off
             * the edge of the layout, will return %NULL.
             * @param direction an #XfwDirection.
             * @returns a #XfwWorkspace, owned by the parent @group, or %NULL if no workspace exists in @direction.
             */
            get_neighbor(direction: Direction | null): Workspace | null;
            /**
             * Fetches the ordinal number of this workspace.
             *
             * The number can be used to order workspaces in a UI representation.
             *
             * On X11, this number should be stable across runs of your application.
             *
             * On Wayland, this number depends on the order in which the compositor
             * advertises the workspaces.  This order may be stable, but may not be.
             * @returns a non-negative, 0-indexed integer.
             */
            get_number(): number;
            /**
             * Fetches this workspace's state bitfield.
             * @returns a #XfwWorkspaceState bitfield.
             */
            get_state(): WorkspaceState;
            /**
             * Fetches the group this workspace belongs to, if any.
             * @returns a #XfwWorkspaceGroup instance, owned by @workspace, or %NULL if the workspace is not a member of any groups.
             */
            get_workspace_group(): WorkspaceGroup | null;
            /**
             * Attempts to remove `workspace` from its group.
             *
             * On failure, `error` (if provided) will be set to a description of the error
             * that occurred.
             * @returns %TRUE if workspace removal succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
             */
            remove(): boolean;
        }

        export const Workspace: WorkspaceNamespace & {
            new (): Workspace; // This allows `obj instanceof Workspace`
        };

        namespace WorkspaceGroup {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                active_workspace: Workspace;
                activeWorkspace: Workspace;
                monitors: Monitor[];
                screen: Screen;
                workspace_manager: WorkspaceManager;
                workspaceManager: WorkspaceManager;
                workspaces: Workspace[];
            }
        }

        export interface WorkspaceGroupNamespace {
            $gtype: GObject.GType<WorkspaceGroup>;
            prototype: WorkspaceGroup;
        }
        interface WorkspaceGroup extends GObject.Object {
            // Properties

            /**
             * The active #XfwWorkspace on this #XfwWorkspaceGroup, or %NULL.
             */
            get active_workspace(): Workspace;
            /**
             * The active #XfwWorkspace on this #XfwWorkspaceGroup, or %NULL.
             */
            get activeWorkspace(): Workspace;
            /**
             * The list of #XfwMonitor this #XfwWorkspaceGroup is displayed on.
             */
            get monitors(): Monitor[];
            /**
             * The #XfwScreen that owns this #XfwWorkspaceGroup.
             */
            get screen(): Screen;
            /**
             * The #XfwWorkspaceManager instance that manages this #XfwWorkspaceGroup.
             */
            get workspace_manager(): WorkspaceManager;
            /**
             * The #XfwWorkspaceManager instance that manages this #XfwWorkspaceGroup.
             */
            get workspaceManager(): WorkspaceManager;
            /**
             * The list of #XfwWorkspace in this #XfwWorkspaceGroup.
             */
            get workspaces(): Workspace[];

            // Methods

            /**
             * Attempts to create a new workspace on `group`.  Typically, the new workspace
             * will be appended to the existing list of workspaces.
             *
             * On failure, `error` (if provided) will be set to a description of the error
             * that occurred.
             * @param name a name for the new workspace.
             * @returns %TRUE if workspace creation succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
             */
            create_workspace(name: string): boolean;
            /**
             * Gets the active workspace on `group,` if there is one.
             * @returns an #XfwWorkspace, or %NULL if there is no active workspace.
             */
            get_active_workspace(): Workspace | null;
            /**
             * Returns a bitfield describing operations allowed on this `group`.
             * @returns an #XfwWorkspaceGroupCapabilities bitfield.
             */
            get_capabilities(): WorkspaceGroupCapabilities;
            /**
             * Lists the physical monitors that this workspace group displays on.
             * @returns A list of #XfwMonitor, or %NULL if @group is not displayed on any monitors.  The list and its contents are owned by @group.
             */
            get_monitors(): Monitor[] | null;
            /**
             * Fetches the number of workspaces in `group`.
             * @returns an unsigned integer describing the number of workspaces.
             */
            get_workspace_count(): number;
            /**
             * Fetches the #XfwWorkspaceManager instance that owns `group`.
             * @returns a #XfwWorkspaceManager, owned by @group.
             */
            get_workspace_manager(): WorkspaceManager;
            /**
             * Lists the workspaces in `group`.
             * @returns the list of #XfwWorkspace in @group, or %NULL if there are no workspaces. The list and its contents are owned by @group.
             */
            list_workspaces(): Workspace[] | null;
            /**
             * Moves the workspace group to a new location, and possibly a new monitor.
             *
             * On failure, `error` (if provided) will be set to a description of the error
             * that occurred.
             * @param x a coordinate in the horizontal direction.
             * @param y a coordinate in the vertical direction.
             * @returns %TRUE if moving the workspace group succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
             */
            move_viewport(x: number, y: number): boolean;
            /**
             * Sets the layout of `group` to `rows` by `columns`.
             *
             * Note that this will not change the number of workspaces if the new layout
             * implies a larger number of workspaces than currently exists.
             *
             * On failure, `error` (if provided) will be set to a description of the error
             * that occurred.
             * @param rows the new numbers of rows.
             * @param columns the new number of columns.
             * @returns %TRUE if changing the layout of @group succeede, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
             */
            set_layout(rows: number, columns: number): boolean;
        }

        export const WorkspaceGroup: WorkspaceGroupNamespace & {
            new (): WorkspaceGroup; // This allows `obj instanceof WorkspaceGroup`
        };

        namespace WorkspaceManager {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                screen: Screen;
            }
        }

        export interface WorkspaceManagerNamespace {
            $gtype: GObject.GType<WorkspaceManager>;
            prototype: WorkspaceManager;
        }
        interface WorkspaceManager extends GObject.Object {
            // Properties

            /**
             * The #XfwScreen instance that owns this workspace manager.
             */
            get screen(): Screen;

            // Methods

            /**
             * Lists all workspace groups known to the workspace manager.
             * @returns the list of #XfwWorkspaceGroup managed by @manager, or %NULL if there are no workspace groups.  The list and its contents are owned by @manager.
             */
            list_workspace_groups(): WorkspaceGroup[] | null;
            /**
             * List all workspaces known to the workspace manager.
             * @returns the list of #XfwWorkspace managed by @manager, or %NULL if there are no workspaces.  The list and its contents are owned by @manager.
             */
            list_workspaces(): Workspace[] | null;
        }

        export const WorkspaceManager: WorkspaceManagerNamespace & {
            new (): WorkspaceManager; // This allows `obj instanceof WorkspaceManager`
        };

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

    export default Libxfce4windowing;
}

declare module 'gi://Libxfce4windowing' {
    import Libxfce4windowing00 from 'gi://Libxfce4windowing?version=0.0';
    export default Libxfce4windowing00;
}
// END
