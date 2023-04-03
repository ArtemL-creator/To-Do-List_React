import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Handler implements HttpHandler {
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String response = "";
        String method = exchange.getRequestMethod();

        if (method.equals("POST")) {
            InputStream inputStream = exchange.getRequestBody();
            String body = new String(inputStream.readAllBytes(), StandardCharsets.UTF_8);

            FileWriter writer = new FileWriter("data.json", false);
            writer.write(body);
            writer.close();
        } else if (method.equals("GET")) {
            byte[] encoded = Files.readAllBytes(Paths.get("data.json"));
            response = new String(encoded, StandardCharsets.UTF_8);
        }

        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        exchange.getResponseHeaders().add("Access-Control-Allow-Credentials", "true");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,HEAD");

        exchange.sendResponseHeaders(200, 0);

        try (OutputStream os = exchange.getResponseBody()) {
            os.write(response.getBytes());
        }
    }
}