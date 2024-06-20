import org.json.JSONObject;
import java.util.Scanner;

public class JsonFormatter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter JSON string:");
        String jsonString = scanner.nextLine();

        JSONObject jsonObject;
        try {
            jsonObject = new JSONObject(jsonString);
        } catch (Exception e) {
            System.out.println("Invalid JSON format.");
            return;
        }

        StringBuilder formattedOutput = new StringBuilder();
        formattedOutput.append("{\n");
        for (String key : jsonObject.keySet()) {
            formattedOutput.append(String.format("    \"%s\": \"%s\",\n", key, jsonObject.getString(key)));
        }
        // Remove the last comma and add closing bracket
        int lastIndex = formattedOutput.lastIndexOf(",");
        if (lastIndex != -1) {
            formattedOutput.deleteCharAt(lastIndex);
        }
        formattedOutput.append("}");

        System.out.println(formattedOutput.toString());
    }
}
